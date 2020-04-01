console.log(global);

let i = 0;

let intervalo = setInterval(function(){
    console.log('Hola');
    if (i === 2){
        clearInterval(intervalo);
    }
    i++;
}, 1000)

setImmediate(function(){
    console.log('sms inmediato');
})

console.log(this === global);

console.log(process);
console.log(__dirname);
console.log(__filename);

