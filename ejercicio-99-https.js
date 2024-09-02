/* Servir un archivo HTML:
Crea un servidor HTTPS que sirva un archivo HTML estático desde el sistema de archivos 
cuando un cliente acceda al servidor. */

const https = require("node:https");

const server = https.createServer((req, res) => {

    res.writeHead(200, {});
    res.end("Mi servidor funcionando...");

});

server.listen(3000, (err) => {
    if(err){
        console.log("Ha ocurrido un error en el servidor:", err);
    }
});



