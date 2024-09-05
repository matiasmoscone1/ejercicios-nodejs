/* Servidor HTTPS con autenticación básica:
Configura un servidor HTTPS que requiera autenticación básica (usuario y contraseña) 
para acceder a ciertos endpoints. */

const https = require("node:https");

const port = process.env.PORT || 443;

const usuario = new Buffer("userprueba").toString("base64");
const contrasenia = new Buffer("passprueba").toString("base64");


const options = {
    hostname: "https://localhost",
    path: "/registro",
    port: 443,
    method: "GET",
    auth: {
        user: usuario,
        pass: contrasenia
    }    
}

const server = https.createServer(options, (req, res) => {


});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});




