// No hace falta requerirlo pues es global de nodejs
// const process = require('process');

// Lo llamamos y utilizamos directamente.

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

// exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
// A partir de aqui todo debe ser sincrono
process.on('exit', () => {
    console.log('El proceso terminó');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya!, se paso caputrar algun error...');
    console.error(err);
});

// Error forzado para ver el ejemplo de la captura
funcionqueNoExiste();

console.log('Esto si el error no se recoge no sale...');