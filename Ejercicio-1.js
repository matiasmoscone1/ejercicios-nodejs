const http = require("node:http");


const server = http.createServer((req, res) => {
    //res.end("Hola Mundo!");

    res.setHeader("Content-Type", "text/plain");

    if(req.url === "/"){
        res.statusCode = 200;
        res.end("Bienvenidos al inicio!");
    }else if(req.url === "/contacto"){
        res.statusCode = 200;
        res.end("Bienvenidos a la seccion Contacto!");
    }else if(req.url === "/sobre"){
        res.statusCode = 200;
        res.end("Bienvenidos a la seccion Sobre Nosotros!");
    }else if(req.url === "/info"){
        res.statusCode = 200;
        res.end("Bienvenidos a la seccion Informacion!");
    }else{
        res.statusCode = 404;
        res.end("Pagina no encontrada...");
    }



});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
});




