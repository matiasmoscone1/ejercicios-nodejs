/* Crear y Escribir en un Archivo:
Crea un programa que escriba un mensaje en un archivo llamado mensaje.txt. */

const fs = require("node:fs");
const rl = require("node:readline");


const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Sobreescribir archivo (s) - Añadir informacion (a)", () => {
    if("s"){
        fs.writeFile("mensaje.txt", "Hola muy buenos dias!!!!", (err) => {
            if(err){
                console.log("no se encontro el archivo...");
            }
        })
    }
    else if("a"){
        const string = "";
        interface.question("Escriba lo que quiere añadir: ", () => {
            string = 
        })
        fs.appendFile("mensaje.txt", "\nEstoy añadiendo informacion al arhivo :)", (err) => {
            if(err){
                console.log("no se encuentra el archivo...");
            }
        });
    }
})










