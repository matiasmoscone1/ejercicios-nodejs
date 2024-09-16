/* Manejo de formularios con POST: Crea un formulario que envíe datos a una ruta y 
procese el cuerpo del formulario. */

const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.status(200).sendFile(`${path.join(__dirname)}/formulario.html`)
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.status(200).send(`------------- Registro exitoso ------------- \nNombre: ${req.body.name}\nApellido: ${req.body.lastname}\nEmail: ${req.body.email}\nDireccion: ${req.body.address}\nTelefono: ${req.body.telephone}`);
});




app.listen(port, (err) => {
    if(err){
        console.log("Ocurrio un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
