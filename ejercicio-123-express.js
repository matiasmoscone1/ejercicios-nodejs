/* Subir archivos: Usa multer para permitir la subida de archivos a través de un formulario. */

const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/"});

const port = process.env.PORT || 3000;

app.post("/login", upload.none(), (req, res, next) => {
    console.log(req.body);
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formAuth.html`);
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
