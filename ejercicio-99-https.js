/* Servir un archivo HTML:
Crea un servidor HTTPS que sirva un archivo HTML estático desde el sistema de archivos 
cuando un cliente acceda al servidor. */

const https = require("node:https");
const fs = require("node:fs");

const server = https.createServer((req, res) => {
 
    if(req.url === "/archivo"){
        const readableFile = fs.createReadStream("archivo-index.html");
        res.writeHead(200, {"Content-Type": "text/plain"});
        readableFile.pipe(res);

        readableFile.on("error", (err) => {
            res.writeHead(500);
            res.end("Error al cargar el archivo...");
            console.log("Error:", err);
        });
    }else{
        res.end("Recurso no encontrado...");
    }

});

server.listen(3000, (err) => {
    if(err){
        console.log("Ha ocurrido un error en el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto: 3000");
    }
});



