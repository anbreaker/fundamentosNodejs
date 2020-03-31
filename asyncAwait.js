async function hola(nombre, miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function () {
            console.log('Bla, bla, bla, bla...');
            resolve('Hay un error (reject, responde)');
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function () {
            console.log('Adios', nombre);
            resolve();
            reject('Hay un error (reject, responde)');
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('anbreaker');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos proceso...')
}

console.log('Iniciamos proceso...')
main();