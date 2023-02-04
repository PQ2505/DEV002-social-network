import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  signOut,
}
  from './firebase.js';
// eslint-disable-next-line max-len
const exitConsult = (email, password) => signInWithEmailAndPassword(auth, email, password);

const authGoogle = () => signInWithPopup(auth, provider);

const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const signOff = () => signOut(auth);

const user = () => auth.currentUser;

export {
  exitConsult, authGoogle, createUser, signOff, user,
};
