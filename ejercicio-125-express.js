/* Configuración de variables de entorno: Usa dotenv para cargar configuraciones 
sensibles desde un archivo .env. */

const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send(process.env.SECRET_KEY);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});




