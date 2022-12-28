
describe('Pruebas en <DemoComponent/>',()=>{

test('Esta prueba no fallara', ()=>{

    // 1. Inicializacion
    const message1 = 'Hola planeta';
    // 2.Estimulo
    const message2 = message1.trim();
    // 3. Observar el comportamiento esperado
    expect( message1 ).toBe( message2 )

    })

})