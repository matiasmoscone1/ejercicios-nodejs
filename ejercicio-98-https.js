/* Crear un servidor HTTPS básico:
Crea un servidor HTTPS que responda con "Hello, Secure World!" a cualquier solicitud. 
Usa certificados autofirmados para configurar el servidor. */

const https = require("node:https");

const options = {
    key: "asd123",
    cert: "asd123"
}

const server = https.createServer(options, (req, res) => {

    res.writeHead(200);
    res.end("Hello, Secure World!");

});

server.listen(3000, (err, data) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en puerto: 3000");
    }
});




