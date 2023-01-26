// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import expectExport from 'expect';
import { exitConsult, Sum } from '../src/lib/auth.js';
// eslint-disable-next-line import/no-unresolved
 import { auth, signInWithEmailAndPassword }   from '../src/lib/firebase.js';

 const userCredentialMock = {
  user: {
    sendEmailVerification: jest.fn(),
  },
};

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
  };
});

describe('61391590', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const email = 'example@gmail.com';
    const password = '123';
    const actual = await App.signup(email, password);
    expect(actual).toEqual('Check your email for verification mail before logging in');
    expect(auth().createUserWithEmailAndPassword).toBeCalledWith(email, password);
    expect(userCredentialMock.user?.sendEmailVerification).toBeCalled();
  });
});
 
/*
jest.mock('../src/lib/firebase.js', () => ({

    return: {
    auth: jest.fn(() => ({
      return: { auth: 'Test' },
    })),
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('Correo o Contraseña Incorrectos');
      }
      if (email === ' ') {
        throw new Error('correo incorrecto');
      }
      if (email === 'paolaquirogap10@gmail.com') {
        return ('correo válido');
      }
      Promise.resolve("error")
    }),
  },
}));

test('Pruaba de suma ', async () =>{
  //Declaracion --

  const email = "sandra aguirre@gmail.com";
  const password = '123san';
// Ejecucion -- 

   let respuesta  = await signInWithEmailAndPassword(auth,email, password);

   console.log(respuesta);
  //evaluacion de resultados --

  expect(respuesta).toBe(true);
  //expect(Sum(2,3)).toBe(5);
 });
describe('Test para funcion exitConsult', () => {
  console.log("Describe");
  const email = 'pepitoperez@gmail.com';
  const password = 'Love12345';
  it('Debe mostrar error en el email', async () => {
    try {
      await exitConsult(email, password);
    } catch (error) {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
    }
  });
});
*/