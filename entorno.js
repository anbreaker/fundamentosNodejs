//Para ejecutar este programa:
//NOMBRE=anbreaker WEB=loquesea.es node entorno.js
//npm install -g nodemon
//Utilizar nodemon: nodemon 'archivo.js'
// nodemon: npm install -g nodemon (Para desarrollo)
// pm2: npm install -g pm2 (Para producción)

let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'Sin web'


console.log('HOLA ' + nombre)
console.log('Mi web es ' + web)

let n = 5;
console.log(typeof(n),n)
let s = '5'
console.log(typeof(s), s)
let e = n + s;
console.log(typeof(e), e)
let r = e + 2 * 2;
console.log(typeof(r), r)