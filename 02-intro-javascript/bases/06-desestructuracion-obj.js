


const persona = {
    nombre:'Juan',
    edad:45,
    clave:'Perez',
    rango:'Soldado'
}

/* const { nombre, edad, clave } = persona; */

/* console.log(nombre);
console.log(persona.edad);
console.log(persona.clave); */

const useContext = ({clave, nombre, edad, rango}) => {
       /* console.log(nombre,edad,rango) */
       return{
        nombreClave:clave,
        anios:edad
       }

}

const {nombreClave, anios} = useContext(persona);

console.log(avenger);