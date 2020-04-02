const http = require('http');

function router(req, res){
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end();
            break;
        default:
            res.write('Eror 404: No se lo que quieres');
            res.end();
    }

    // // Cabecera
    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // //Escribir respuestas al usuario
    // res.write('Hola usando HTTP desde nodejs')
    
    // res.end();
}

http.createServer(router).listen(3000)

// console.log('Escuchando http en el puerto 3000');
