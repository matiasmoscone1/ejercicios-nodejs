/* Generar un par de claves pública y privada RSA: Genera un par de claves RSA 
(pública y privada) utilizando crypto.generateKeyPairSync() y guárdalas en 
archivos separados. */
/* Firmar un mensaje digitalmente: Firma un mensaje utilizando una clave privada RSA y 
verifica la firma utilizando la clave pública correspondiente. */


const crypto = require("node:crypto");
const fs = require("node:fs");

const keys = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: "spki",
        format: "pem"
    },
    privateKeyEncoding: {
        type: "pkcs8",
        format: "pem"
    }
});

console.log(keys.publicKey, keys.privateKey);

fs.writeFile("publicKey.txt", keys.publicKey, (err) => {
    if(err){
        console.log("Ocurrio un error al crear el archivo...", err);
    }
});
fs.writeFile("privateKey.txt", keys.privateKey, (err) => {
    if(err){
        console.log("Ocurrio un error al crear el archivo...", err);
    }
});



