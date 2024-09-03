/* 
Configurar un servidor HTTPS con opciones avanzadas:
Crea un servidor HTTPS que acepte solo ciertas versiones de TLS (1.2 y 1.3) y algoritmos de 
cifrado. Explora las opciones de configuración como secureOptions y ciphers. */

const https = require("node:https");
const crypto = require("node:crypto");
const selfsigned = require("selfsigned");

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert,
    secureOptions: crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 |
    crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1,
    ciphers: [
        "TLS_AES_256_GCM_SHA384",
        "TLS_AES_128_GCM_SHA256",
        "TLS_CHACHA20_POLY1305_SHA256",
        "ECDHE-RSA-AES256-GCM-SHA384",
        "ECDHE-RSA-AES128-GCM-SHA256",
        "ECDHE-RSA-CHACHA20-POLY1305"
    ].join(":"),
    honorCipherOrder: true
}

const port = process.env.PORT || 3000;


const server = https.createServer(options, (req, res) => {



});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor escuchando en el puerto:", port);
    }
});




