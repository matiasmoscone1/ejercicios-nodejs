/* Manejo de cookies: Usa el middleware cookie-parser para crear, leer y borrar cookies. */

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
    console.log(req.cookies);
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/setCookie", (req, res) => {
    res.cookie("PrimeraCookie", "valorCookie", {maxAge: 50000, httpOnly: true });
    res.status(200).send("Cookie creada");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
