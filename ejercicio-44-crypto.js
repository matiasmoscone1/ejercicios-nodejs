/* Validar la integridad de un archivo: Calcula el hash de un archivo utilizando SHA-1 y 
luego verifica que el archivo no haya sido modificado comparando el hash calculado con 
un hash preexistente. */ 

const crypto = require("node:crypto");
const fs = require("node:fs");


const hash = crypto.createHash("sha256");

const input = fs.createReadStream(`${__dirname}/mensaje.txt`);

input.pipe(hash).setEncoding("hex").pipe(process.stdout);



