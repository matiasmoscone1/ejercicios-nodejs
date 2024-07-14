const http = require("node:http");


const server = http.createServer((req, res) => {
    res.end("Hola Mundo!");
});


server.listen(3000, () => {
    
});




