
import { getHeroeById } from './bases/08-export-import-func-comunes-arr';

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const heroe = getHeroeById(4);
        resolve(heroe);
        
    }, 2000);
});

promesa.then((heroe)=>{
    console.log('heroe', heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if(p1){
            resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);