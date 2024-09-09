/* Cliente HTTPS con certificado personalizado:
Crea un cliente HTTPS que se conecte a un servidor utilizando un certificado de cliente 
personalizado para autenticar la conexión.*/ 

const https = require("node:https");
const selfsigned = require("selfsigned");

const port = process.env.PORT || 443;

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });

const options = {
    hostname: "localhost",
    port: 443,
    path: "/",
    method: "GET",
    key: pems.private,
    cert: pems.cert
}

const server = https.createServer(options, (req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Estas en la pagina principal");
    }else{
        res.writeHead(404);
        res.end("Ha ocurrido un error...");
    }
});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error en el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});





