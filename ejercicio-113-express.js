/* Enviar un archivo HTML estático: Usa res.sendFile() para enviar un archivo HTML 
cuando se acceda a una ruta específica. */

const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/file", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public/index.html"), (err) => {
        if(err){
            console.log("Ha ocurrido un error al cargar el archivo:", err);
        }
    });

});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});





