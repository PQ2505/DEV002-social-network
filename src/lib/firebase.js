// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// Consultas firebase
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import firebaseConfig from './firebaseconfig.js';

// Servivcios Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
}
