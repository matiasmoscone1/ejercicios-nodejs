/* Ejecutar un comando con argumentos y capturar su salida: Usa child_process.exec 
para ejecutar echo "Hello, World!" y captura la salida. */

const child_process = require("node:child_process");

child_process.exec(`echo "Hello world"`, (err, stdout, stderr) => {
    if(err){
        console.log("Hubo un error: ", err);
    }
    if(stderr){
        console.log("Hubo un error en el proceso: ", stderr);
    }
    console.log("El resultado es:", stdout);

});






