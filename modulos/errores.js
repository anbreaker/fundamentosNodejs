function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + z
}

function seRompeAsincrona(callBack){
    setTimeout(function (){
        try{
            return 3 + z;
        } catch (error) {
            console.error('Error en mi funcion asincrona')
            callBack(error);
        }
    })
}

try{
    // seRompe();
    seRompeAsincrona(function(error){
        console.log(error.message);
        
    });
    otraFuncion();
} catch(error){
    console.error('Vaya, algo se ha roto...');
    console.error(error);
    console.error(error.message);
    console.log('Pero lo hemos capturado');
    
}

console.log('Esto de aqui esta al final');
