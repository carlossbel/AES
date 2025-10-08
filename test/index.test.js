const index = require('./testindex');

test('Verificar Hash', () => {
    const mensaje = "Contraseña.";
    const resultadoEsperado = "6c8d12c4224edfdcd6299116180f22b46fe54cd20e10709ab491038d139617a0335710837b87532ad50db9b77f91c9a280a02c70f331ac2ad1949a8f71334c1b";
    const resultadoObtenido = index(mensaje);
    expect(resultadoObtenido).toBe(resultadoEsperado);
});