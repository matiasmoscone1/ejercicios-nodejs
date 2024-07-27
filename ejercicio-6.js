/* Eliminar un Archivo:
Crea un programa que elimine nuevoMensaje.txt o algun archivo que se le pase */

const fs = require("node:fs");
const rl = require("node:readline");

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Nombre del archivo que desea eliminar: ", (answer) => {

    fs.unlink(answer, (err, res) => {
        if(err)
    })
    fs.unlink(answer, (err, res) => {
        if(err){
            throw new Error;
        }else{
            console.log(res, "Archivo deleteado con exito");
        }
    })

});



