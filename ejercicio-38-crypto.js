/* Encriptar y desencriptar un mensaje con AES: Utiliza el algoritmo de encriptación 
simétrica AES-256-CBC para encriptar un mensaje. Luego, escribe otro script que 
desencripte el mensaje cifrado y recupere el texto original. */

const crypto = require("node:crypto");

const secretKey = "asdasdasd";
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
const descipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);

const password = "hola123";

const encryptMessage = (msj) => {
    let encrypted = cipher.update(msj, "utf-8", "hex");

    encrypted += cipher.final("hex");
    
    console.log(encrypted);

    let decrypted = descipher.update(encrypted, "hex", "utf-8");
    decrypted += descipher.final("utf-8");

    console.log(decrypted);
}

encryptMessage(password);



