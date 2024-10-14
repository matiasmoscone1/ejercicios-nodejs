const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db.js");
const user = require("./routes/userRoutes");
const port = process.env.PORT || 4000;


app.use("/user", user);

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
