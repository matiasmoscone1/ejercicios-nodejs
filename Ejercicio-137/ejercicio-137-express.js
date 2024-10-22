const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db.js");
const users = require("./routes/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 4000;
const limiter = require("./middlewares/rateLimitMiddleware");

app.use(limiter);
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", users);


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});
