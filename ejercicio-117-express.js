/* Manejo de formularios con POST: Crea un formulario que envíe datos a una ruta y 
procese el cuerpo del formulario. */

const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));

app.get("/register", (req, res) => {
    res.status(200).sendFile(`${path.join(__dirname)}/formulario.html`)
});

app.post("/register/sucessfull", (req, res) => {
    console.log(req.body);
    res.status(200).send(`------------- Registro exitoso ------------- <br>Nombre: ${req.body.name}<br>Apellido: ${req.body.lastname}<br>Email: ${req.body.email}<br>Direccion: ${req.body.address}<br>Telefono: ${req.body.telephone}`);
});




app.listen(port, (err) => {
    if(err){
        console.log("Ocurrio un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
