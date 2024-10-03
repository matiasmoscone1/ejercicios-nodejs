/* Dividir rutas en módulos: Crea tres archivos de rutas separados: users.js, products.js, y 
orders.js. Cada archivo debe manejar un conjunto de rutas relacionadas con su entidad 
(usuarios, productos, órdenes). Luego, agrégalos a tu archivo principal app.js y 
asegúrate de que cada conjunto de rutas esté disponible bajo /users, /products, y /orders. */

const express = require("express");
const app = express();
require("dotenv").config();
const users = require("./users");
const products = require("./products");
const orders = require("./orders");


const port = process.env.PORT || 4000;

app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);



app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

