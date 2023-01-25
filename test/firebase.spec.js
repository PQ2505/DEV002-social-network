// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import { exitConsult } from '../src/lib/auth.js';

import { signInWithEmailAndPassword } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js', () => ({
  return: {
    auth: jest.fn(() => ({
      return: { auth: 'Test' },
    })),
    exitConsult: jest.fn((auth, email, password) => {
      let respuesta;
      if (!email || !password) {
        throw new Error('Correo o Contraseña Incorrectos');
      }
      if (email === ' ') {
        throw new Error('correo incorrecto');
      }
      if (email === 'paolaquirogap10@gmail.com') {
        respuesta = 'correo válido';
      }
      return respuesta;
    }),
  },
}));

describe('Test para funcion exitConsult', () => {
  const email = 'pepitoperez@gmail.com';
  const password = 'Love12345';
  it('Debe retornar un correo y una contraseña Incorrectas', async () => {
    await signInWithEmailAndPassword(email, password);
    expect(exitConsult).toHaveBeenCalled();
  });
});
