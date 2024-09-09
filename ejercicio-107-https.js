/* Cliente HTTPS con certificado personalizado:
Crea un cliente HTTPS que se conecte a un servidor utilizando un certificado de cliente 
personalizado para autenticar la conexión.*/ 

const https = require("node:https");

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
        res.end("Estas en la pagina principal");
    }
});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error en el servidor:", err);
    }
});





