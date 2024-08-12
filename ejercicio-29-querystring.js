/* Codificar una cadena: Usa querystring.escape() para codificar una cadena de texto, 
convirtiendo caracteres especiales en su representación de escape. 

Decodificar una cadena: Dada una cadena codificada, usa querystring.unescape() para 
decodificarla, devolviendo los caracteres originales. */

const querystring = require("node:querystring");

const text = "Hola ¿como estas?, soy Matias. Vamos a conocernos en el cafe a las 17:00 #coffee";

console.log(querystring.escape(text));

const text2 = "Hola%20%C2%BFcomo%20estas%3F%2C%20soy%20Matias.%20Vamos%20a%20conocernos%20en%20el%20cafe%20a%20las%2017%3A00%20%23coffee";

console.log(querystring.unescape(text2));





