/* Parámetros en rutas: Crea una ruta que reciba un parámetro dinámico, como /user/:id, 
y devuelva el ID del usuario. */

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const user = {
    id: 1,
    nombre: "Matias",
    apellido: "Messi",
    email: "matias@asdasd.com"
}

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});

app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    if(user.id === userId){
        res.send(`Bienvenido usuario: ${user.nombre} ${user.apellido}`);
    }else{
        res.status(404).send("El id no coincide con ningun usuario...");
    }
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});





