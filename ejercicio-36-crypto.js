/* Generar un Hash SHA-256: Escribe un script que tome una cadena de texto como entrada y 
genere su hash utilizando el algoritmo SHA-256. */

const crypto = require("node:crypto");

const hash = crypto.createHash("sha256").update("soy matias moscone").digest("hex");

console.log(hash);

const secretKey = "asdasdasd";
const hmac = crypto.createHmac("sha256", secretKey).update("soy matias moscone");

console.log(hmac.digest("hex"));

