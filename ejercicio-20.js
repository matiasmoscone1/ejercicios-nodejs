/* Vas a crear un servidor en Node.js que funcione como un acortador de URLs, 
similar a servicios como Bit.ly.  */

const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    

});

server.listen(port, () => {
    console.log("El servidor esta siendo escuchado en el puerto: ", port);
});


