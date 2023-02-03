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
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { app } from './firebase.js';

const db = getFirestore(app);

export const savePublic = async (coment, amountLikes, usersLikeArray) => {
  try {
    const docRef = await addDoc(collection(db, 'Publication'), { coment, amountLikes, usersLikeArray });
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

export const getPublicationForId = (id) => getDoc(doc(db, 'Publication', id));

export const like = (id, likes, userLike) => updateDoc(doc(db, 'Publication', id), {amountLikes:likes, usersLikeArray: arrayUnion(userLike)});

export const disLike = (id, likes, userLike) => updateDoc(doc(db, 'Publication', id), {amountLikes:likes, usersLikeArray: arrayRemove(userLike)});


