/* Crear un proceso hijo que ejecute un comando de shell básico: Usa child_process.exec 
para ejecutar dir y muestra el resultado en la consola. */

const child_process = require("node:child_process");


child_process.exec("dir", (err, stdout, stderr) => {
    if(err){
        console.log("Error al ejecutar el comando: ", err);
        return;
    }
    if(stderr){
        console.log("Error en el comando: ", stderr);
        return;
    }

    console.log("Informacion del comando: ", stdout);

});






