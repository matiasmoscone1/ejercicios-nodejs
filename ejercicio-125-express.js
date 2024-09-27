/* Configuración de variables de entorno: Usa dotenv para cargar configuraciones 
sensibles desde un archivo .env. */

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = dotenv.process.env.PORT || 4000;



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});




