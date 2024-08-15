/* Encriptación y desencriptación con claves derivadas: Utiliza la clave derivada en el 
enunciado anterior para encriptar y luego desencriptar un archivo de texto. */

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const password = "hola123";

const devKey = () => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, "salt", 100000, 32, "sha512", (err, derivedKey) => {
            if(err){
                throw reject;
            }else{
                resolve(derivedKey);
            }
        });   
    });
}


devKey().then((key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    
    const input = fs.createReadStream(path.join(__dirname, "mensaje.txt"));
    const output = fs.createWriteStream(path.join(__dirname, "mensaje_encriptado.txt"));
    
    input.pipe(cipher).pipe(output);

    output.on("finish", () => {
        console.log("Archivo encriptado");
        const encryptedInput = fs.createReadStream(path.join(__dirname, "mensaje_encriptado.txt"));
        const decryptedOutput = fs.createWriteStream(path.join(__dirname, "mensaje_encriptado_desencriptado.txt"));
        
        encryptedInput.pipe(decipher).pipe(decryptedOutput);
    
        decryptedOutput.on("finish", () => {
            console.log("Archivo desencriptado");
        })
    })
}).catch((err) => {
    console.log("Error al encriptar y desencriptar el archivo...", err);
})



