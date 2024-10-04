/* 2. Rutas anidadas con express.Router(): Crea una ruta anidada para manejar categorías y 
productos dentro de esas categorías. Por ejemplo:
/categories: Devuelve todas las categorías.
/categories/:categoryId/products: Devuelve todos los productos dentro de una categoría 
específica.
Utiliza express.Router() para modularizar las rutas y que las rutas de productos sean 
parte de la ruta de categorías. */

const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;








app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port)
    }
});

