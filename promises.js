function hola(nombre, miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function () {
            console.log('Bla, bla, bla, bla...');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function () {
            console.log('Adios', nombre);
            // resolve();
            reject('Hay un error (reject, responde)');
        }, 1000);
    });
}

// Ejecucion

console.log('Iniciado el proceso')
hola('anbreaker')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso')
    })
    .catch(error => {
        console.error('Ha habido un error: (caputra el catch)');
        console.error(error);
    })