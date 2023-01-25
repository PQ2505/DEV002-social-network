import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
}
  from './firebase.js';
// eslint-disable-next-line max-len
export const exitConsult = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    return userResult;
  } catch (error) {
    return error;
  }
};

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => error);
};
