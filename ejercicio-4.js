/* Crear y Escribir en un Archivo:
Crea un programa que escriba un mensaje en un archivo llamado mensaje.txt. */

const fs = require("node:fs");


fs.writeFile("mensaje.txt", "Hola muy buenos dias!!!!", (err) => {
    if(err){
        console.log("no se encontro el archivo...");
    }
})

fs.appendFile("mensaje.txt", "\nEstoy añadiendo informacion al arhivo :)", (err) => {
    if(err){
        console.log("no se encuentra el archivo...");
    }
});
