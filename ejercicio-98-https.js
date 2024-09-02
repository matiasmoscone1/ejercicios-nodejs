/* Crear un servidor HTTPS básico:
Crea un servidor HTTPS que responda con "Hello, Secure World!" a cualquier solicitud. 
Usa certificados autofirmados para configurar el servidor. */

const https = require("node:https");
const selfsigned = require("selfsigned");

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert
}

const server = https.createServer(options, (req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello, Secure World!");
    }else{
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("Ha ocurrido un error en la carga del servidor");
    }
});

server.listen(3000, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en puerto: 3000");
    }
});






