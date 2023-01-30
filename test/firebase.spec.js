// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import {
  authGoogle, createUser, exitConsult,
} from '../src/lib/auth.js';

// primer mock de autenticacion
jest.mock('../src/lib/firebase.js', () => ({ // aqui se accede a la libreria "JEST"
  auth: jest.fn(() => ({ auth: 'auth' })), // Aqui imitamos el objeto auth

  // segundo Mock "signInWithEmailAndPassword"
  signInWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'correonoexistente@gmail.com') {
      throw new Error('Correo inválido');
    } if (password === '123') {
      throw new Error('Contraseña inválida'); // lanzamos el error
    }
  }),
  // tercer Mock "createUserWithEmailAndPassword"
  createUserWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'correonoexistente@gmail.com') {
      throw new Error('Correo inválido');
    } if (password === '123') {
      throw new Error('Contraseña inválida'); // lanzamos el error
    }
  }),
  // cuarto Mock "signInWithPopup"
  signInWithPopup: jest.fn((email) => {
    if (email === '2020sandrarios@gamil.com') {
      return ('Correo válido');
    }
    return ('Correo invalido');
  }),
}));

describe('Se testea la función Auth', () => {
  it('signInWithEmailAndPassword debe devolver un email incorrecto', async () => {
    try {
      const email = 'correonoexistente@gmail.com';
      const password = '123';
      await exitConsult(email, password);
    } catch (error) {
      expect(error.message).toBe('Correo inválido');
    }
  });
  it('signInWithEmailAndPassword debe devolver un password incorrecto', async () => {
    try {
      const email = 'correonoexistente@gmail.com';
      const password = '123';
      await exitConsult(email, password);
    } catch (error) {
      expect(error.message).toBe('Contraseña inválida');
    }
  });
  it('createUserWithEmailAndPassword debe dar email incorrecto', async () => {
    try {
      const email = 'correonoexistente@gmail.com';
      const password = '123';
      await createUser(email, password);
    } catch (error) {
      expect(error.message).toBe('Correo inválido');
    }
  });
  it('createUserWithEmailAndPassword debe dar contraseña incorrecta', async () => {
    try {
      const email = 'correonoexistente@gmail.com';
      const password = '123';
      await createUser(email, password);
    } catch (error) {
      expect(error.message).toBe('Contraseña incorrecta');
    }
  });
  it('signInWithPopup devuelve un correo válido', async () => {
    try {
      const email = '2020sandrarios@gamil.com';
      await authGoogle(email);
    } catch (error) {
      expect(error.message).toBe('Correo válido');
    }
  });
});
