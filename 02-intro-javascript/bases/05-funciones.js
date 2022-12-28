

const getUser = () =>
    ({
        uid:'ABCD',
        username: 'El_cuate178'
    });


console.log(getUser());

/*
    1.Tranformar a una funcion de flecha 
    2.Retornar un objeto implicito
    3.Pruebas
*/

const getUsuarioActivo = ( nombre ) =>
    ({
        
            uid:'ABCDEFG',
            username:nombre
    
    });


const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);