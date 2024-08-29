/* util.format: Crea una función que reciba un nombre, edad y país, y utilice util.format 
para generar un mensaje que siga el formato: "Nombre: <nombre>, Edad: <edad>, País: <país>". */

const util = require("node:util");


const functionFormat = (name, age, country) => {
    console.log(util.format(`Nombre: %s, Edad: %s, Pais: %s`, name, age, country));
}

functionFormat("Matias", "28", "Argentina");


