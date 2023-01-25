// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import { exitConsult } from '../src/lib/auth.js';

import { auth, signInWithEmailAndPassword } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js', () => {
  return {
    auth: jest.fn(() => {
      return { auth: 'Test' };
    }),
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
    }),
  };
});

describe ( 'Test para funcion exitConsult', ()=>{
    const email = 'pepitoperez@gmail.com'
    const password = 'Love12345'
it('Debe retornar un correo y una contraseña Incorrectas', async() => {
   await exitConsult(email, password)
   expect (signInWithEmailAndPassword).toHaveBeenCalled()
})

})