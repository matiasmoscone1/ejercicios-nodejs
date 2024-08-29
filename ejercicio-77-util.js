/* util.format: Crea una función que reciba un nombre, edad y país, y utilice util.format 
para generar un mensaje que siga el formato: "Nombre: <nombre>, Edad: <edad>, País: <país>". */

const util = require("node:util");


const functionFormat = (name, age, country) => {
    return(util.format(`Nombre: ${name}, Edad: ${age}, Pais: ${country}`));
}




