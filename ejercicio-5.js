/* Renombrar un Archivo:
Crea un programa que renombre mensaje.txt a nuevoMensaje.txt. */

const fs = require("node:fs");
const rl = require("node:readline");

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Escriba el nuevo nombre del archivo: ", (answer) => {
    fs.rename("mensaje.txt", answer, (err) => {
        if(err){
            console.log("no se encontro el archivo...");
        }
    });

    interface.close();
});






