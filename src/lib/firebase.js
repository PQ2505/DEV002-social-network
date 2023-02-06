// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  arrayRemove,
  arrayUnion,
  Timestamp,
  orderBy,
  query,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

import firebaseConfig from './firebaseconfig.js';

// Servivcios Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// se exporta para usarlas en otros archivos
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  arrayRemove,
  arrayUnion,
  Timestamp,
  orderBy,
  query,
};
