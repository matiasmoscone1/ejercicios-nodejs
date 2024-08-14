/* Firmar un mensaje digitalmente: Firma un mensaje utilizando una clave privada RSA y 
verifica la firma utilizando la clave pública correspondiente. */

const crypto = require("node:crypto");

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



