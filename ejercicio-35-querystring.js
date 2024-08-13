/* Convertir un objeto con arreglos en una cadena de consulta: Dado un objeto con 
propiedades que contienen arreglos, usa querystring.stringify() para ver cómo se 
manejan los valores de los arreglos en la cadena de consulta. */

const querystring = require("node:querystring");

const params =  {
    name: 'Matias Moscone',
    city: 'Córdoba, Argentina',
    email: 'matiasm323@gmail.com',
    colors: ["red", "blue", "yellow", "black"]
};

const stringifyQuery = querystring.stringify(params);

console.log(stringifyQuery);

