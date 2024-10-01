/* Conectar a una base de datos: Usa MongoDB y Mongoose para conectar Express con 
una base de datos y manejar operaciones CRUD (Create, Read, Update, Delete). */

const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product_model.js");

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_CONNECT);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!");
});

app.get("/products", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formProduct.html`);
});

app.post("/products", (req, res) => {
    //console.log(req.body);
    const { article, brand, category, price, description } = req.body;
    const newProduct = new Product({ article, brand, category, price, description});
    newProduct.save();
    res.status(200).send("Producto agregado correctamente!");
});

app.get("/products/view", async (req, res) => {
    try {
        const data = await Product.find();
        return res.json(data);
    }catch(err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
});

app.get("/products/view/:id", async (req, res) => {
    const idProduct = req.params.id;
    console.log(idProduct);
    try {
        const data = await Product.findById(idProduct);
        return res.json(data);
    }catch(err) {
        res.status(500).send({
            message: err.message || "Error al realizar la búsqueda"
        });
    }
});

app.get("/products/remove/:id", async (req, res) => {
    const removeId = req.params.id;
    try{
        const prod = await Product.findByIdAndDelete(removeId);
        if(prod){
            return res.status(200).send("Producto Eliminado con exito...");
        }else{
            return res.status(500).send("No se pudo eliminar el producto");
        }
    }catch(err){
        res.status(500).send({
            message: err.message || "Error al realizar la busqueda"
        });
    }
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor ha sido levantado en el puerto:", port);
    }
})

