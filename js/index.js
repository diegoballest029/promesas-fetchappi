/*const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'spaceX'
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
const retornPersona = (usuario) => {
    const {edad, clave, nombre,} = usuario;
    console.log(edad,clave,nombre)
}
retornPersona(persona);
const useContext = ({clave, nombre, edad, rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        nombre: nombre,
        edad: edad,
        rango: rango,
        años: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
        }
    }
const {nombreClave,nombre, edad, rango, años, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, años);
console.log(lat, lng);
console.log(nombre);
console.log(edad);
console.log(rango)
const personajes = ['Goku','Vegeta','trunks'];
const [, , p3] = personajes;
const [p1] = personajes;
const [,p2] = personajes;
console.log(p3);
console.log(p1);
console.log(p2);
console.log(p1,p2,p3);
const promesa = new promise ((resuelta, rechazada));


*/
const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'spiderman: Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];
const getDatos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}
getDatos()
.then((datos) => console.log(datos));

import heroes from "../data/heroes";
 export const getHeroesById = (id) => heroes.find( (heroe) => heroe.id === id );
 export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );





