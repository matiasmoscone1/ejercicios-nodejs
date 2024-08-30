/* util.TextEncoder y util.TextDecoder: Convierte una cadena de texto a un Uint8Array 
usando TextEncoder y luego conviértelo de vuelta a una cadena de texto utilizando TextDecoder. */

const util = require("node:util");

const stringConver = "Hi my name is Matias and i have 28 years old";

const encoder = new util.TextEncoder();

console.log(encoder.encode(stringConver));



