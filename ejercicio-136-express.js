/* Implementar CORS: Agrega el middleware para manejar solicitudes CORS entre 
diferentes dominios. */

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 4000;

const animales = ["Perro", "Gato", "Elefante", "Mamut", "Ardilla", "Bob Esponja"];

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"]
}));

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/datos", (req, res) => {
    res.status(200).json(animales);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

