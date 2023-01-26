// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import { exitConsult } from '../src/lib/auth.js';
// eslint-disable-next-line import/no-unresolved
// import { auth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

jest.mock('../src/lib/firebase.js', () => ({
  return: {
    auth: jest.fn(() => ({
      return: { auth: 'Test' },
    })),
    signInWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('Correo o Contraseña Incorrectos');
      }
      if (email === ' ') {
        throw new Error('correo incorrecto');
      }
      if (email === 'paolaquirogap10@gmail.com') {
        return ('correo válido');
      }
      return Promise.resolve();
    }),
  },
}));

describe('Test para funcion exitConsult', () => {
  const email = 'pepitoperez@gmail.com';
  const password = 'Love12345';
  it('Debe mostrar error en el email', async () => {
    try {
      await exitConsult(email, password);
    } catch (error) {
      console.log(error);
      expect(error.message).toBe('email incorrecto');
    }
  });
});
