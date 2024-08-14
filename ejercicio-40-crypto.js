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

//console.log(keys.publicKey, keys.privateKey);

const message = "Este mensaje va a ser firmado digitalmente.";

const sign = crypto.createSign("sha256").update(message).end();

const signature = sign.sign(keys.privateKey);

const verify = crypto.createVerify("sha256").update(message).end();

console.log(verify.verify(keys.publicKey, signature));
