/* Crear un proceso hijo que ejecute un comando de shell básico: Usa child_process.exec 
para ejecutar ls -la y muestra el resultado en la consola. */

const child_process = require("node:child_process");


child_process.exec("ls -la", (err) => {
    if(err){
        console.log("Error al ejecutar el comando: ", err);
    }
});






