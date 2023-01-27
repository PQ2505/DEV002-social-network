import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
}
  from './firebase.js';
// eslint-disable-next-line max-len
export const exitConsult =  (email, password) =>  signInWithEmailAndPassword(auth, email, password);

export const authGoogle =  () => signInWithPopup(auth, provider);

export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  
  
