/* Manejo de archivos estáticos: Sirve archivos estáticos como HTML, CSS o imágenes desde 
una carpeta public. */

const express = require("express");
const app = express();
const fs = require("node:fs");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {

    const readableFile = fs.createReadStream("public/index.html");
    const readableFile2 = fs.createReadStream("public/index.css");
    
    readableFile2.pipe(res);

});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



