/* Subir archivos: Usa multer para permitir la subida de archivos a través de un formulario. */

const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads"});

const port = process.env.PORT || 3000;

app.post("/upload", upload.single("avatar"), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
});

app.get("/upload", (req, res) => {
    res.status(200).sendFile(`${__dirname}/avatar.html`);
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
