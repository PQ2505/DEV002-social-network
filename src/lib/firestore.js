// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  arrayRemove,
  arrayUnion,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { app } from './firebase.js';

const db = getFirestore(app);

export const savePublic = async (id, coment, like) => {
  try {
    const docRef = await addDoc(collection(db, 'Publication'), {id, coment, like });
    console.log(docRef.id);
  } catch (error) {
    console.log(error);
  }
};
// eslint-disable-next-line max-len
export const getPublication = () => getDocs(collection(db, 'Publication'));

export const unsub = (callBack) => onSnapshot(collection(db, 'Publication'), callBack);

export const deleteComent = (id) => deleteDoc(doc(db, 'Publication', id));

export const updatePost = (id, newPost) => updateDoc(doc(db, 'Publication', id), newPost);

export const like = (id, likes, Ulike) => updateDoc(doc(db, 'Publication', id), {amountLikes:likes, array: arrayUnion(Ulike)});

export const disLike = (id, likes, Ulike) => updateDoc(doc(db, 'Publication', id), {amountLikes:likes, array: arrayRemove(Ulike)});





// export const state = onAuthStateChanged(auth, (user) => {
//   if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // const uid = user.uid;
    // ...
  // } else {
    // User is signed out
    // ...
//   }
// });

// export const updatePost = (id) => updateDoc(doc(db, 'Publication', id));

// export const q = query(collection(db, 'Publication'), orderBy('','desc'));
