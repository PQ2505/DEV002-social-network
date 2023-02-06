import {
  db,
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
  from './firebase.js';

export const savePublic = (coment, amountLikes, usersLikeArray) => addDoc(collection(db, 'Publication'), {
  coment,
  amountLikes,
  usersLikeArray,
  date: Timestamp.fromDate(new Date()),
});

// get public es vigilada por onSnapshot en tiempo real para no refrescar la pagina
// eslint-disable-next-line max-len
export const getPublic = () => getDocs(collection(db, 'Publication'));

const postData = query(collection(db, 'Publication'), orderBy('date', 'desc'));

export const unsub = (callBack) => onSnapshot(postData, callBack);

export const deletePublic = (id) => deleteDoc(doc(db, 'Publication', id));

export const updatePublic = (id, newPost) => updateDoc(doc(db, 'Publication', id), newPost);

export const getPublicationForId = (id) => getDoc(doc(db, 'Publication', id));

export const like = (id, likes, userLike) => updateDoc(doc(db, 'Publication', id), { amountLikes: likes, usersLikeArray: arrayUnion(userLike) });

export const disLike = (id, likes, userLike) => updateDoc(doc(db, 'Publication', id), { amountLikes: likes, usersLikeArray: arrayRemove(userLike) });
