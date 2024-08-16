/* Generar y verificar un HMAC: Crea un HMAC (Hash-based Message Authentication Code) 
utilizando SHA-256 para un mensaje dado, y luego escribe un script que verifique la 
integridad del mensaje usando el HMAC. */

const crypto = require("node:crypto");
const rl = require("node:readline");

const message = "Hola muy buenos dias soy matias";
const key = "asdasd";

const hmac = crypto.createHmac("sha256", key).update(message).digest("hex");

const interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Escribe el mensaje: ", (answer) => {
    const hmac2 = crypto.createHmac("sha256", key).update(answer).digest("hex");
    if(hmac === hmac2){
        console.log("Mensaje valido, no ha sido modificado");
    }else{
        console.log("Mensaje invalido, ha sido modificado...");
    }
    interface.close();
});

//console.log(hmac);







