/* Generar un Hash SHA-256: Escribe un script que tome una cadena de texto como entrada y 
genere su hash utilizando el algoritmo SHA-256. */

const crypto = require("node:crypto");

const hash = crypto.createHash("sha256").update("soy matias moscone").digest("hex");

console.log(hash);


