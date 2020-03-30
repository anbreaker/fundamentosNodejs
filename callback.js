function soyAsincrona(miCallback){
    console.log('Hola, soy una funcion asíncrona');
    setTimeout(function (){
        console.log('Estoy siendo asincrona')
        miCallback()
    }, 1000)
}

console.log('Iniciando proceso soyAsincrona...')
soyAsincrona(function(){
    console.log('Terminando proceso soyAsincrona...')
});

//------------------------------------------------------

function holaSoyAsincrona(nombre, miCallback){
    //console.log('Hola, soy una funcion asíncrona');
    setTimeout(function (){
        console.log('hola ' + nombre)
        miCallback();
    }, 1300)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000)
}

console.log('Iniciando proceso...')
holaSoyAsincrona('anbreaker', function(){
    adios('anbreaker', function(){
        console.log('Terminando proceso...');
    });
});
