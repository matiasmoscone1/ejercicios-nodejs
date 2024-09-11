/* Manejo de archivos estáticos: Sirve archivos estáticos como HTML, CSS o imágenes desde 
una carpeta public. */

const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;


app.use(express.static("/", path.join(__dirname, "public")));


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



