/* Redirigir HTTP a HTTPS:
Configura un servidor HTTP que redirija automáticamente todas las solicitudes a su 
equivalente HTTPS. */

const https = require("node:https");
const http = require("node:http");

const port = process.env.PORT || 3000;

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


