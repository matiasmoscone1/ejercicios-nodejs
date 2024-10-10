/* Validación de datos con express-validator: Usa esta librería para validar los datos 
recibidos en un formulario o solicitud. */

const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.status(200).send("Bienvenido a la pagina principal!!!");
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
})

