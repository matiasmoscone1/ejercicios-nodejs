/* Cargar y descargar archivos: Implementa la lógica para que los usuarios puedan subir y 
descargar archivos de un servidor Express. */

const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");

const port = process.env.PORT || 4000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})






app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
