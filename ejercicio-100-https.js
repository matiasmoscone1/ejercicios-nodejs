/* Redirigir HTTP a HTTPS:
Configura un servidor HTTP que redirija automáticamente todas las solicitudes a su 
equivalente HTTPS. */

const https = require("node:https");
const http = require("node:http");
const selfsigned = require("selfsigned");

const port = process.env.PORT || 3000;
const portHTTPS = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hola bienvenido al servidor http");
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Ha ocurrido un error...");
    }

});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor corriendo en el puerto:", port);
    }
});

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert
}

const serverHTTPS = https.createServer(options, (req, res) => {
    
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hola bienvenido al servidor https");
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Ha ocurrido un error...");
    }

});

serverHTTPS.listen(portHTTPS, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor https escuchando en el puerto:", portHTTPS);
    }
});

