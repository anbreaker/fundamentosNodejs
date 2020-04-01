const fs = require('fs');

function leer(ruta, callBack){
    fs.readFile(ruta, (error, data) => {
        callBack(data.toString());        
    })
}

function escribir(ruta, contenido, callBack){
    fs.writeFile(ruta, contenido, function(error){
        if (error){
            console.error('No he podido escribirlo',error)
        } else{
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, callBack){
    fs.unlink(ruta, callBack);
}

leer(__dirname + '/ejLectura.txt', console.log)

let sms = 'Soy un archivo nuevo.'
escribir(__dirname + '/ejLectura_1.txt', sms, console.log)
leer(__dirname + '/ejLectura_1.txt', console.log)
borrar(__dirname + '/ejLectura_1.txt', console.log)
// leer(__dirname + '/ejLectura_1.txt', console.log)



