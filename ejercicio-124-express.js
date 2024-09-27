/* Paginación de resultados: Implementa paginación para un conjunto de datos (como usuarios 
o productos) en la base de datos. */

const express = require("express");
const app = express();
const dbUsers = require("./dbUsers");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(dbUsers);
    res.status(200).send("Bienvenido a la pagina principal");
});


app.get(`/page/:n`, (req, res) => {
    let page = req.params.n;
    const limit = 4;
    let first = (page - 1) * limit;
    let last = page * limit;
    const users = dbUsers.slice(first, last);
    //console.log(`Page: ${page} - ${JSON.stringify(users)}`);
    res.status(200).json(users);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("El servidor ha sido levantado en el puerto:", port);
    }
});    







