import { getHeroeById } from './index.js';
const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            }else {
                reject( 'No se pudo encontrar el heroe');
            }
        },200)
    });
}
getHeroeByIdAsync(3)
  .then( console.log)
  .catch( console.warn)


  