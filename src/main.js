// eslint-disable-next-line import/no-cycle
import { routes } from './routes/route.js';

export const surfing = (pathname, archivoNuevo = routes) => {
  const rootMain = document.querySelector('#containerMain');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // En la sintaxis de replaceChildren "archivo nuevo(seccion)" es el archivo que reemplazará
  // la seccion actual y lo que está entre corchetes "archivoActual" es el nombre de la nueva
  return rootMain.replaceChildren(archivoNuevo[pathname]());
};
window.addEventListener('DOMContentLoaded', () => surfing(window.location.pathname));
