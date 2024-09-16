/* Manejo de formularios con POST: Crea un formulario que envíe datos a una ruta y 
procese el cuerpo del formulario. */

const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/register", (req, res) => {
    res.status(200).sendFile(`${path.join(__dirname)}/formulario.html`);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ocurrio un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
