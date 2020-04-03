let suma = 0;

console.time('todo')
console.time('bucle')
for (let i = 0; i < 10000000; i++){
    suma += 1;
}

console.log(suma);
console.timeEnd('bucle')

let suma2 = 0;

console.time('bucle 2')
for (let j = 0; j < 100000000; j++){
    suma2 += 1;
}

console.log(suma2);
console.timeEnd('bucle 2')

console.log('Empieza el proceso asincrono');
console.time('asicrona');
asincrona()
    .then( () => {
        console.timeEnd('asicrona')
    });

console.timeEnd('todo')

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('Termina el proceso asíncrono');
            resolve();
        })
    })
}
