function asincrona(callBack) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callBack(null, a);
        } catch (e) {
            callBack(e);
        }
    }, 1000);
}

asincrona(function(err, dato) {
    if (err) {
        console.error("Tenemos un error");
        console.error(err);
        // Para funciones sincronas --> throw err
        return false;
    }
    console.log("Todo ha ido bien, mi data es", dato);
});
