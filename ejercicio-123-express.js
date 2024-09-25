/* Subir archivos: Usa multer para permitir la subida de archivos a través de un formulario. */

const express = require("express");
const app = express();
const fs = require("node:fs");
const multer = require("multer");
const path = require("node:path");

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        callback(null, file.fieldname + "-" + Date.now() + ext);
    }
})

const upload = multer({ storage: storage});

app.use("/photos", express.static(`${__dirname}/uploads`));

app.post("/upload", upload.single("avatar"), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
});

app.get("/upload", (req, res) => {
    res.status(200).sendFile(`${__dirname}/avatar.html`);
});

app.get("/photos", (req, res) => {
    fs.readdir(`${__dirname}/uploads`, (err, files) => {
        if(err){
            return res.status(500).send("Error al leer los archivos");
        }else{
            console.log(files);
            console.log(__dirname);
            const html = `<html>
                <body>
                    <h2>Imagenes</h2>
                        ${files.map((file) => `<img src="${file}" style=width:200px; height: 400px></img>`).join('')}
                    </body>
            </html>`
            res.status(200).send(html);
        }
    })
    res.status(200).sendFile(`${__dirname}/uploads`);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
