/* Rutas protegidas: Implementa un middleware que proteja rutas, permitiendo el acceso solo
a usuarios autenticados. */

const express = require("express");
const app = express();
const session = require("express-session");

const port = process.env.PORT || 3000;

const dbUsers = [{
    username: "Lionel",
    password: "1234"
}];

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "123456",
    resave: false,
    saveUninitialized: true
}));

const isAuth = (req, res, next) => {
    if(req.session.username){
        next();
    }else{
        res.redirect("/login");
    }
}

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formAuth.html`);
});

app.post("/login", (req, res, next) => {
    console.log(req.body);
    if(req.body.username === dbUsers.username && req.body.passowrd === dbUsers.passowrd){
        req.session.username = req.body.username;
        res.redirect("/panel");
    }else{
        res.status(200).send("Usuario o contraseña incorrecto...");
    }
});

app.get("/panel", isAuth, (req, res) => {
    res.status(200).send("Ruta protegida 1");
});

app.get("/stock", isAuth, (req, res) => {
    res.status(200).send("Ruta protegida 2");
});

app.get("/database", isAuth, (req, res) => {
    res.status(200).send("Ruta protegida 3");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


