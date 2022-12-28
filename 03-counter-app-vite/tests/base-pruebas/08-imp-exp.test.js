import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeById debe de retornar un heroe por ID',()=>{
        
        const id = 1;
        const hero = getHeroeById(id);
        //console.log(hero)
        expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById debe de retornar undefined sino existe el ID',()=>{
        
        const id = 100;
        const hero = getHeroeById(id);
        //console.log(hero)
        expect( hero ).toBeFalsy();
    });


    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual el arreglo filtrado

    // debe retornar un arreglo con los heroes de Marvel
    // length === 2

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC',() => {

        const owner = 'DC';
        /////const id = 3;

        const heroes = getHeroesByOwner( owner );
        //console.log(heroes);
        ////expect( hero ).toEqual({id:id, owner:owner});
        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );  
        console.log(uno)
    });
});
