/* Implementar CORS: Agrega el middleware para manejar solicitudes CORS entre 
diferentes dominios. */

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

