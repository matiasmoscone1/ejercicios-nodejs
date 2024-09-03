/* Crear un servidor HTTPS con varios endpoints:
Configura un servidor HTTPS con diferentes rutas (por ejemplo, /, /about, /contact) y 
responde con diferentes mensajes o archivos según la ruta solicitada. */

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
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Bienvenido a la pagina principal");
    }else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Bienvenido a la seccion about");
    }else if(req.url === "/contact"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Bienvenido a la seccion contact");
    }else{
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end("Ha ocurrido un error al cargar la pagina...");
    }

});


