/* Parámetros en rutas: Crea una ruta que reciba un parámetro dinámico, como /user/:id, 
y devuelva el ID del usuario. */

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const users = [{
    id: 1,
    nombre: "Matias",
    apellido: "Messi",
    email: "matias@asdasd.com"
    },
    {
    id: 2,
    nombre: "Leonel",
    apellido: "Messi",
    email: "leomessi@asdasd.com"
    },
    {
    id: 3,
    nombre: "Angel",
    apellido: "Di Maria",
    email: "angelitodm@asdasd.com"
    },
    {
    id: 4,
    nombre: "Alexis",
    apellido: "Mac Allister",
    email: "alexism@asdasd.com"
    },
    {
    id: 5,
    nombre: "Emiliano",
    apellido: "Martinez",
    email: "dibu123@asdasd.com"
    }
];

app.get("/", (req, res) => {
    res.send("Bienvenido a la pagina principal");
});

app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find((u) => u.id === userId);

    if(user){
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





