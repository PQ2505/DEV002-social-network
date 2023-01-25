// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Login } from '../component/login.js';
// eslint-disable-next-line import/no-cycle
import { Home } from '../component/home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from '../component/register.js';
// eslint-disable-next-line import/no-cycle
import { Wall } from '../component/wall.js';

export const routes = {
    '/': Home, // objeto que contiene las direcciones
    '/Login': Login,
    '/Register': Register,
    '/Wall': Wall,
  };
