import {
  savePublic, getPublic, unsub, deletePublic, updatePublic,
} from '../src/lib/firestore.js';

jest.mock('../src/lib/firebase.js', () => ({
  db: jest.fn(() => ({ db: 'db' })),

  addDoc: jest.fn((collection, coment, amountLikes, usersLikeArray) => ({
    id: 1, collection, coment, amountLikes, usersLikeArray,
  })),

  collection: jest.fn((doc) => doc),

  getDocs: jest.fn((collection) => ({ post: 'post', collection })),

  onSnapshot: jest.fn((collection, callBack) => ({ publication: 'publication', collection, callBack })),

  deleteDoc: jest.fn((doc) => ({ doc: 1, id: doc })),

  doc: jest.fn((publication, id) => ({ publication, id })),

  updateDoc: jest.fn((id, newPost) => ({
    id: 'u1',
    newPost: 'PostEdit',
    ids: id,
    newPosts: newPost,
  })),

  orderBy: jest.fn((date, desc) => ({
    date,
    desc,
  })),

  query: jest.fn((collection, orderBy) => ({
    collection,
    orderBy,
  })),
}));

describe('Se testea firestore', () => {
  it('probar funcion savePublic', async () => {
    const result = await savePublic('comentario', 1, 'user');
    expect(result.id).toBe(1);
  });
  it('Probar funcion getPublic', async () => {
    const result = await getPublic();
    expect(result.post).toBe('post');
  });
  it('Probar funcion unsub', async () => {
    const result = await unsub('funcion');
    expect(result.publication).toBe('publication');
  });
  it('Probar funcion deletePublic', async () => {
    const result = await deletePublic('id');
    expect(result.doc).toBe(1);
  });
  it('Probar funcion updatePost', async () => {
    const result = await updatePublic('id', 'newPost');
    expect(result.id).toBe('u1');
    expect(result.newPost).toBe('PostEdit');
  });
});
