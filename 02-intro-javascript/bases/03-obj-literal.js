


const persona = {
    nombre:'Juan',
    apellido:'Perez',
    edad:45,
    direccion:{
        ciudad :'La Paz',
        zip:555555,
        lat:14.555,
        lng:47.2222
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

/* console.table( persona ); */
console.log(persona)
console.log(persona2)