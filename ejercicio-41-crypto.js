/* Crear un token seguro para autenticación: Genera un token aleatorio y seguro utilizando 
crypto.randomBytes() para ser utilizado en un sistema de autenticación. */


const crypto = require("node:crypto");

const token = crypto.randomBytes(3);

console.log(token.toString("hex"));
