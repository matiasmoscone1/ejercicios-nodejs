/* Streaming de datos a través de HTTPS:
Crea un servidor HTTPS que envíe archivos grandes (por ejemplo, un video o un archivo de 
registro) en modo de streaming a los clientes. */

const https = require("node:https");
const fs = require("node:fs");
const selfsigned = require("selfsigned");

const port = process.env.PORT || 443;

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    key: pems.private,
    cert: pems.cert
}

const readableFile = fs.createReadStream("Ejercicios.txt");

const server = https.createServer(options, (req, res) => {
    if(req.url === "/streaming"){
        //res.end(readableFile);
        readableFile.pipe(res);
        /*readableFile.on("data", (data) => {
            res.end(data.toString());
        });*/
    }
});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


