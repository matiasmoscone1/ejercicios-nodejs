/* Conectar a una base de datos: Usa MongoDB y Mongoose para conectar Express con 
una base de datos y manejar operaciones CRUD (Create, Read, Update, Delete). */

const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_CONNECT);

app.use("/products", express.static(`${__dirname}/formProduct.html`));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!");
});

app.post("/products", (req, res) => {
    console.log(req.body);
    /*const { article, category, price, description } = req.body;
    const newProduct = new Product({ article, category, price, description});
    newProduct.save();*/
    //res.status(200).json(newProduct);
});


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor ha sido levantado en el puerto:", port);
    }
})

