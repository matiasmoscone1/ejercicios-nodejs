/* Crear un servidor HTTPS básico:
Crea un servidor HTTPS que responda con "Hello, Secure World!" a cualquier solicitud. 
Usa certificados autofirmados para configurar el servidor. */

const https = require("node:https");
const crypto = require("node:crypto");

const keys = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048 
});

const dataSign = "Cadena de texto que verifica la firma";

const sign = crypto.createSign("SHA256");
sign.write(dataSign);
sign.end();

const cert = sign.sign(keys.privateKey);

console.log(cert);
const options = {
    key: keys.privateKey.export({ type: "pkcs1", format: "pem"}),
    cert: cert.toString("base64")
}

const server = https.createServer(options, (req, res) => {

    res.writeHead(200);
    res.end("Hello, Secure World!");

});

server.listen(3000, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en puerto: 3000");
    }
});






