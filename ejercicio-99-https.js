/* Servir un archivo HTML:
Crea un servidor HTTPS que sirva un archivo HTML estático desde el sistema de archivos 
cuando un cliente acceda al servidor. */

const https = require("node:https");
const fs = require("node:fs");
const selfsigned = require("selfsigned");

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert
}

const server = https.createServer(options, (req, res) => {
 
    if(req.url === "/archivo"){
        const readableFile = fs.createReadStream("archivo-index.html");
        res.writeHead(200, {"Content-Type": "text/html"});
        readableFile.pipe(res);

        readableFile.on("error", (err) => {
            res.writeHead(500);
            res.end("Error al cargar el archivo...");
            console.log("Error:", err);
        });
    }else{
        res.writeHead(404, { "Content-Type": "text/plain" });
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



