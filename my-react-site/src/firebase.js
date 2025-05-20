// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_K7v5s06CyJDNGXRvwvrCdb70WOqhM-8',
  authDomain: 'early-payout-verification.firebaseapp.com',
  projectId: 'early-payout-verification',
  storageBucket: 'early-payout-verification.appspot.com',
  messagingSenderId: '565482493122',
  appId: '1:565482493122:web:1c9a8c92ff10e9073e175b',
  measurementId: 'G-5KGGBV3S15'
};

// ✅ Initialize app once
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

console.log('🔥 Firebase initialized');

export { auth, db, RecaptchaVerifier };