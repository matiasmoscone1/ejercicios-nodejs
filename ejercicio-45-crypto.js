/* Generar y verificar un HMAC: Crea un HMAC (Hash-based Message Authentication Code) 
utilizando SHA-256 para un mensaje dado, y luego escribe un script que verifique la 
integridad del mensaje usando el HMAC. */

const crypto = require("node:crypto");

const message = "Hola muy buenos dias soy matias";
const key = "asdasd";

const hmac = crypto.createHmac("sha256", key).update(message).digest("hex");


console.log(hmac);







