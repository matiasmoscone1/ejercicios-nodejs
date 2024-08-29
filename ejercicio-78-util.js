/* util.promisify: Convierte una función de callback a una función que retorne una promesa 
utilizando util.promisify. Utiliza una función de lectura de archivos del módulo fs 
como ejemplo. */

const util = require("node:util");
const fs = require("node:fs");

const readFileAsync = util.promisify(fs.readFile);

async function callbackFunction() {
    try{
        const data = await readFileAsync("mensaje.txt");
        console.log(data.toString());
    }catch(err){
        console.log("Ocurrio un error: ", err);
    }
}

callbackFunction();








