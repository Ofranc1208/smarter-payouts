// src/components/UnlockModal.jsx

import React, { useState, useEffect } from 'react';
import './UnlockModal.css';

import { auth, db, RecaptchaVerifier } from '../firebase';
import { signInWithPhoneNumber } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Helper function to format phone number with dashes
const formatPhoneNumber = (digits) => {
  if (!digits) return '';
  // Remove all non-digit characters (should already be done by input change handler, but as a safeguard)
  const cleaned = digits.replace(/\D/g, '');
  // Apply formatting
  if (cleaned.length > 6) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  } else if (cleaned.length > 3) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}`;
  } else {
    return cleaned;
  }
};

const UnlockModal = () => {
  const [phoneDigits, setPhoneDigits] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState('phone');
  const [loading, setLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    const setupRecaptcha = async () => {
      if (typeof window === 'undefined' || window.recaptchaVerifier || !auth?.app) return;

      try {
        // Optional: enable this only for localhost dev
        // Check if auth.settings exists and we are on localhost
        if (window.location.hostname === 'localhost' && auth.settings) {
          auth.settings.appVerificationDisabledForTesting = true;
          console.log('🧪 Dev mode reCAPTCHA bypass enabled');
          // On localhost with bypass, we don't need to render the reCAPTCHA widget
          return; // Exit the function after enabling bypass
        } else if (window.location.hostname !== 'localhost'){
           // If not localhost, render the reCAPTCHA widget
            window.recaptchaVerifier = new RecaptchaVerifier(
              'recaptcha-container',
              {
                size: 'invisible',
                callback: (response) => {
                  console.log('✅ reCAPTCHA solved:', response);
                }
              },
              auth
            );
            await window.recaptchaVerifier.render();
            console.log('✅ reCAPTCHA initialized for non-localhost');
        }

       // The reCAPTCHA widget for localhost bypass is not needed, as Firebase handles it internally when appVerificationDisabledForTesting is true.
       // The recaptcha-container div is still needed for the RecaptchaVerifier constructor even in invisible mode.

        console.log('✅ reCAPTCHA setup attempt finished');

      } catch (error) {
        console.error('❌ reCAPTCHA init error:', error);
        setRecaptchaError('Could not load verification. Please try again later.');
      }
    };

    setupRecaptcha();

    // Cleanup function
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneDigits(cleaned);
  };

  const handleSendCode = async () => {
    setLoading(true);
    setFirebaseError(null);
    if (phoneDigits.length !== 10) {
      setFirebaseError('📱 Please enter a valid 10-digit phone number');
      setLoading(false);
      return;
    }

    const fullPhone = `+1${phoneDigits}`;

    // Log details just before sending
    console.log('Attempting to send code to phone:', fullPhone);

    // Pass undefined for appVerifier on localhost if bypass is enabled, Firebase handles it.
    // Otherwise, pass the initialized window.recaptchaVerifier.
    const appVerifier = window.location.hostname === 'localhost' && auth.settings?.appVerificationDisabledForTesting
      ? undefined
      : window.recaptchaVerifier;

    console.log('Auth object:', auth);
    console.log('App Verifier being passed:', appVerifier);

    try {
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setStep('otp');
    } catch (err) {
      console.error('❌ Firebase error sending code:', err);
      let errorMessage = 'Failed to send verification code.';
      if (err.code === 'auth/invalid-phone-number') errorMessage = 'Invalid phone number format.';
      if (err.code === 'auth/too-many-requests') errorMessage = 'Too many requests. Try again later.';
      if (err.code === 'auth/argument-error') errorMessage = 'Verification failed. Please try again.'; // Added a specific message for argument error
      setFirebaseError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    setLoading(true);
    setFirebaseError(null);
    if (otp.length !== 6) {
      setFirebaseError('⚠️ Enter the 6-digit code sent to your phone');
      setLoading(false);
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setStep('success');

      await addDoc(collection(db, 'verifiedPhones'), {
        phone: `+1${phoneDigits}`,
        timestamp: serverTimestamp()
      });

      alert('✅ Phone verified!');
    } catch (error) {
      console.error('❌ Invalid code:', error);
      let errorMessage = 'Invalid verification code. Try again.';
      if (error.code === 'auth/invalid-verification-code') errorMessage = 'The verification code is invalid.';
      if (error.code === 'auth/code-expired') errorMessage = 'The verification code has expired.';
      setFirebaseError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>

      <div className="unlock-modal">
        {step === 'phone' && (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2950/2950655.png"
              className="unlock-image"
              alt="lock icon"
            />
            <h2 className="unlock-title">
              This offer is temporarily <span className="highlight">locked</span>.
            </h2>
            <p className="unlock-text">
              Enter your phone number to unlock your personalized offer and get up to
              <strong> $5,600 in bonus cash</strong> at closing.
            </p>
            <p className="unlock-text">
              Your quote is reserved for 24 hours. Secure it below:
            </p>

            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="e.g. 561-583-1280"
              value={formatPhoneNumber(phoneDigits)}
              onChange={handleInputChange}
              className="phone-input-field"
              disabled={loading}
            />
            {firebaseError && <div className="text-danger small mt-2">{firebaseError}</div>}

            <button 
              onClick={handleSendCode}
              disabled={loading}
              className={loading ? 'loading' : ''}
            >
              {loading ? 'Sending...' : 'Send Code'}
            </button>
          </>
        )}

        {step === 'otp' && (
          <>
            <h2 className="unlock-title">Enter Verification Code</h2>
            <p className="unlock-text">We sent a 6-digit code to your phone.</p>

            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit code"
              disabled={loading}
            />
            {firebaseError && <div className="text-danger small mt-2">{firebaseError}</div>}

            <button 
              onClick={handleVerifyCode}
              disabled={loading}
              className={loading ? 'loading' : ''}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </>
        )}

        {step === 'success' && (
          <>
            <h2 className="unlock-title">🎉 Offer Unlocked!</h2>
            <p className="unlock-text">Thank you! Your offer is now fully available.</p>
          </>
        )}
      </div>
    </>
  );
};

export default UnlockModal;
