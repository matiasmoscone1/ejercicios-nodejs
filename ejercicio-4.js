/* Crear y Escribir en un Archivo:
Crea un programa que escriba un mensaje en un archivo llamado mensaje.txt. */

const fs = require("node:fs");
const rl = require("node:readline");


const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Sobreescribir archivo (s) - Añadir informacion (a) - Leer archivo (l)", (answer) => {
    if(answer === "s"){
        fs.writeFile("mensaje.txt", "Hola muy buenos dias!!!!", (err) => {
            if(err){
                console.log("no se encontro el archivo...");
            }
        })
    }
    else if(answer === "a"){
        interface.question("Escriba lo que quiere añadir: ", (ans) => {
            fs.appendFile("mensaje.txt", `\n${ans}`, (err) => {
                if(err){
                    console.log("no se encuentra el archivo...");
                }
                interface.close();
            });        
        });
    }else if(answer === "l"){
        fs.readFile("mensaje.txt", {encoding: "utf8"},(err, info) => {
            if(err){
                console.log("No se pudo leer el archivo...");
            }
            console.log(info);
        })
        
    }

})










