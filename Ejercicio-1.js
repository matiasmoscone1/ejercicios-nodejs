const http = require("node:http");


const server = http.createServer((req, res) => {
    res.end("Hola Mundo!");
});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
});




