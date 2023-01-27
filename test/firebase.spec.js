// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
import { exitConsult } from '../src/lib/auth.js';
// eslint-disable-next-line import/no-unresolved
 import { auth, signInWithEmailAndPassword }   from '../src/lib/firebase.js';

 //primer mock de autenticacion
jest.mock('../src/lib/firebase.js', () => ({  //aqui se accede a la libreria "JEST"
auth: jest.fn(() =>{  //Aqui imitamos el objeto auth 
  return{ auth: 'auth' }
}),

//segundo Mock "signInWithEmailAndPassword"
signInWithEmailAndPassword : jest.fn((email, password) =>{
  if(email === 'correonoexistente@gmail.com'){
    throw new Error('Correo inválido');
  }if(password === '123'){
    throw new Error('Contraseña inválida'); //lanzamos el error
  }
})
}))

describe('Se testea la función Auth', () =>{
  it('exitConsult debe devolver un email y password incorrecto', async () =>{
    try{
    const email = 'correonoexistente@gmail.com';
    const password = '123';
    await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
      expect(error.message).toBe('Correo inválido')
    }
  })
})
