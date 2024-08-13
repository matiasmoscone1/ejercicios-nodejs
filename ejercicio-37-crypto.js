/* Comparar contraseñas hash: Crea una función que reciba una contraseña en texto plano y 
su versión hasheada, y verifique si coinciden utilizando el algoritmo SHA-512. */

const crypto = require("node:crypto");

const password = "hola123";

const hashedPass = crypto.createHash("sha256").update(password).digest("hex");

console.log(hashedPass);



