// version clasica
// const exec = require('child_process').exec;
// ecma6
const { exec , spawn } = require('child_process')

exec('pwd', (err, stdout, sterr) => {
    if (err){
        console.error(err);
        return false
    }
    console.log(stdout);
})

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('¿Esta activo el proceso?')
    console.log(process.killed)
    console.log(dato.toString)
});

proceso.on('exit', function(){
    console.log('El proceso terminó');
    console.log(proceso.killed);
});