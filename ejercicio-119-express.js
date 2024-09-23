/* Manejo de sesiones: Usa express-session para manejar sesiones de usuario. */

const express = require("express");
const session = require("express-session");
const app = express();

const port = process.env.PORT || 3000;

app.use(session({
    secret: "123456",
    resave: true,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    req.session.user = "Lionel Messi";
    req.session.role = "Admin";
    console.log(req.session);
    req.session.visit = req.session.visit ? ++req.session.visit : 1; 
    res.status(200).send(`El usuario ${req.session.user} con el rol ${req.session.role}
    ha visitado la pagina ${req.session.visit} veces`);
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});



