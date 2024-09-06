/* Servidor HTTPS con autenticación básica:
Configura un servidor HTTPS que requiera autenticación básica (usuario y contraseña) 
para acceder a ciertos endpoints. */

const https = require("node:https");
const selfsigned = require("selfsigned");


const port = process.env.PORT || 443;

const usuario = "userprueba";
const contrasenia = "passprueba";

const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 720 });


const options = {
    key: pems.private,
    cert: pems.cert,
    hostname: "https://localhost",
    path: "/registro",
    port: 443,
    method: "GET",
};

const server = https.createServer(options, (req, res) => {
    if (req.url === '/registro') { 
        const authHeader = req.headers['authorization'];
    
        if (!authHeader) {
          res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Protected Area"' });
          return res.end('Authorization required.');
        }

    const base64Credentials = authHeader.split(' ')[1]; 
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8'); 
    const [username, password] = credentials.split(':');
        
    if (username === usuario && password === contrasenia) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Access granted.');
      } else {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Protected Area"' });
        res.end('Invalid credentials.');
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Public endpoint.');
    }
    
});

server.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});




