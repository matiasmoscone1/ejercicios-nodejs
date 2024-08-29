/* util.promisify: Convierte una función de callback a una función que retorne una promesa 
utilizando util.promisify. Utiliza una función de lectura de archivos del módulo fs 
como ejemplo. */

const util = require("node:util");
const fs = require("node:fs");


const callbackFunction = () => {
    fs.readFile("mensaje.txt", (err, data) => {
        if(err){
            console.log("Error al leer el archivo: ", err);
        }else{
            console.log(data.toString());
        }
    });
}

callbackFunction();







