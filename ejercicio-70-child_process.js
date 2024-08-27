/* Capturar errores de un proceso hijo: Ejecuta un comando inválido con child_process.exec 
y maneja el error que ocurre. */

const child_process = require("node:child_process");

child_process.exec("di0r", (err, stdout, stderr) => {
    if(err){
        console.log("Hubo un error en el proceso: ", err);
    }
    if(stderr){
        console.log("Hubo un error en el proceso hijo: ", stderr);
    }else{
        console.log("El resultado es: ", stdout);
    }

});




