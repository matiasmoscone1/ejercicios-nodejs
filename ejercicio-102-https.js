/* 
Configurar un servidor HTTPS con opciones avanzadas:
Crea un servidor HTTPS que acepte solo ciertas versiones de TLS y algoritmos de cifrado. 
Explora las opciones de configuración como secureOptions y ciphers. */

const https = require("node:https");
const crypto = require("node:crypto");
const selfsigned = require("selfsigned");

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert
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




