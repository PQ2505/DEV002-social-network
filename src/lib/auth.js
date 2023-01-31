import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
}
  from './firebase.js';
// eslint-disable-next-line max-len
const exitConsult = async (email, password) => signInWithEmailAndPassword(auth, email, password);

const authGoogle = () => signInWithPopup(auth, provider);

const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const signOff = () => signOut(auth);

const validatorUser = (callback) => onAuthStateChanged(auth, callback);

export {
  exitConsult, authGoogle, createUser, signOff, validatorUser,
};
