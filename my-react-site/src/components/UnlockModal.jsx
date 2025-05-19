// src/components/UnlockModal.jsx

import React, { useState, useEffect } from 'react';
import './UnlockModal.css';

import { auth, db, RecaptchaVerifier } from '../firebase';
import { signInWithPhoneNumber } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const UnlockModal = () => {
  const [phoneDigits, setPhoneDigits] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState('phone');

  useEffect(() => {
    const setupRecaptcha = async () => {
      if (typeof window === 'undefined' || window.recaptchaVerifier || !auth?.app) return;

      try {
        // Optional: enable this only for localhost dev
        if (window.location.hostname === 'localhost') {
          auth.settings.appVerificationDisabledForTesting = true;
          console.log('🧪 Dev mode reCAPTCHA bypass enabled');
        }

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
        console.log('✅ reCAPTCHA initialized');
      } catch (error) {
        console.error('❌ reCAPTCHA init error:', error);
      }
    };

    setupRecaptcha();
  }, []);

  const handleInputChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneDigits(cleaned);
  };

  const handleSendCode = async () => {
    if (phoneDigits.length !== 10) {
      return alert('📱 Please enter a valid 10-digit phone number');
    }

    const fullPhone = `+1${phoneDigits}`;

    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
      setStep('otp');
      alert(`✅ Code sent to ${fullPhone}`);
    } catch (err) {
      console.error('❌ Firebase error sending code:', err);
      alert('❌ Failed to send verification code. ' + (err.message || 'Check console.'));
    }
  };

  const handleVerifyCode = async () => {
    if (otp.length !== 6) {
      return alert('⚠️ Enter the 6-digit code sent to your phone');
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
      alert('Invalid verification code. Try again.');
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

            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="tel"
                placeholder="e.g. 5615831280"
                value={phoneDigits}
                onChange={handleInputChange}
                style={{ paddingLeft: '3.2rem' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '1rem',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  fontSize: '14px'
                }}
              >
                +1
              </span>
            </div>

            <button onClick={handleSendCode}>Send Code</button>
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
            />

            <button onClick={handleVerifyCode}>Verify</button>
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
