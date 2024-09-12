/* Redirección de rutas: Redirige una ruta (ej: /old-page) a una nueva ruta (ej: /new-page). */


const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const isLogged = (req) => {
    return req.query.auth === true;
}

app.get("/old-page", (req, res) => {
    if(isLogged){
        res.status(301).redirect("/new-page");
    }else{
        res.status(302).redirect("/login");
    }

});

app.get("/new-page", (req, res) => {
    res.status(200).send("Se redirigió a la nueva pagina :)");
});

app.get("/login", (req, res) => {
    res.send("Porfavor inicie sesion");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error:",err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


