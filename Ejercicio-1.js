const http = require("node:http");


const server = http.createServer((req, res) => {
    //res.end("Hola Mundo!");

    if(req.url === "/"){
        req.statusCode = 200;
        req.end("Bienvenidos al inicio!");
    }else if(req.url === "/Contacto"){
        req.statusCode = 200;
        req.end("Bienvenidos a la seccion Contacto!");
    }else if(req.url === "/Sobre"){
        req.statusCode = 200;
        req.end("Bienvenidos a la seccion Sobre Nosotros!");
    }else if(req.url === "/Info"){
        req.statusCode = 200;
        req.end("Bienvenidos a la seccion Informacion!");
    }




});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
});




