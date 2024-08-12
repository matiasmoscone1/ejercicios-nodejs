/* Codificar una cadena: Usa querystring.escape() para codificar una cadena de texto, 
convirtiendo caracteres especiales en su representación de escape. 

Decodificar una cadena: Dada una cadena codificada, usa querystring.unescape() para 
decodificarla, devolviendo los caracteres originales. */

const querystring = require("node:querystring");

const text = "Hola ¿como estas?, soy Matias. Vamos a conocernos en el cafe a las 17:00 #coffee";

console.log(querystring.escape(text));








