/* Usar req.body con JSON: Crea una ruta que reciba datos en formato JSON y los procese. */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json({"Content-type":"application/json"}));

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!!!");
});

app.post("/json", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).send(JSON.stringify(data));
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el server:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
})





