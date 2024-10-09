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
});

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/downloadUpload.html`);
});

app.post("/upload", upload.single("file"), (req, res) => {
    if(!req.file){
        res.status(404).send("No hay ningun archivo seleccionado para subir...");
    }
    res.status(200).send("Archivo subido correctamente al servidor!!!");
});

app.get("/download", (req, res) => {
    const fileName = req.query.filename;
    //console.log(fileName);
    const filePath = `${__dirname}/uploads/${fileName}`;
    console.log(filePath);
    res.download(filePath, (err) => {
        if(err){
            res.status(404).send("Archivo no encontrado...");
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
