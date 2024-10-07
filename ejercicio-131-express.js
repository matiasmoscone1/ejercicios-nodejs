/* 5. Agrupar rutas por versión de API. Usa express.Router() para crear dos versiones 
diferentes de tu API:
La versión 1 (/api/v1/) con rutas para obtener usuarios y productos.
La versión 2 (/api/v2/) donde las rutas devuelven información adicional 
(por ejemplo, más detalles del producto o usuario). */ 

const express = require("express");
const app = express();
require("dotenv").config();
const products = require("./products");

const port = process.env.PORT || 4000;

app.use("/products", products);



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
