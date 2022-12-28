const nombre= 'juan';
const apellido = 'perez';

const nombreCompleto = `
    ${nombre} 
    ${apellido} 
    ${1+2}`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola : ' +nombre;
}

console.log(`TEXTO:  ${getSaludo(nombre)}`)