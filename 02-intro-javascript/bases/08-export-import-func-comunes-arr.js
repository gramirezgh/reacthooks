
import {heroes} from '../data/heroes'

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
/* 
console.log(getHerosById(3)) */


export const getHeroeByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
/* 
console.log(getHeroesByOwner('Marvel')); */



