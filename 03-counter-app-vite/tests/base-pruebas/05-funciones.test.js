import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => { 

    test('getUSer debe de retornar un objeto', () =>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
       expect( testUser ).toEqual( user )
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Juancho'
        const user = getUsuarioActivo(name);
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name.toUpperCase(),
        }); 
    });
 });