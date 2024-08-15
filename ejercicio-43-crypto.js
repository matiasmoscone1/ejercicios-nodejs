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
                //console.log(derivedKey.toString("hex"));
            }
        });   
    });
}

/*
devKey().then((key) => {
    const secretKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
    let decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);

    let encrypted = cipher.update(key, "utf-8", "hex");
    encrypted += cipher.final("hex");    

    let decrypt = decipher.update(encrypted, "hex", "utf-8");
    decrypt += decipher.final("utf-8"); 
    console.log(key);
    console.log(encrypted);
    console.log(decrypt);
});
*/
devKey().then((key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    
    const input = fs.createReadStream(path.join(__dirname, "mensaje.txt"));
    const output = fs.createWriteStream(path.join(__dirname, "mensaje_encriptado.txt"));
    
    input.on("data", (chunk) => {
        const encryptedChunk = cipher.update(chunk);
        output.write(encryptedChunk);
    });
    
    output.on("end", () => {
        const finalChunk = cipher.final();
        output.write(finalChunk);
        console.log("Archivo encriptado");    
    })
    
});



