/* Autenticación básica: Implementa un sistema de login simple usando sesiones o cookies. */

const express = require("express");
const session = require("express-session");
const app = express();

const port = process.env.PORT || 3000;

const users = {
    user: "admin",
    pass: "1234"
};

app.use(session({
    secret: "123456",
    resave: false,
    saveUninitialized: true
}));

const isAuthenticated = (req, res, next) => {
    if(req.session.users){
        return next();
    }else{
        res.redirect("/login");
    }
};

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!!!");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formAuth.html`);
});

app.post("/login", (req, res) => {
    if(req.body.users.user === username && req.body.users.pass === password){
        req.session.user = username;
        res.redirect("/controlpanel");
    }else{
        res.send("Usuario o contraseña incorrecta...");
    }
});

app.get("/controlpanel", (req, res) => {
    res.status(200).send(`<h3>Usuario logueado con exito, disfrute del panel de control!!!</h3>`);
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err){
            res.status(200).send("Error al cerrar la session:", err);
        }else{
            res.redirect("/login");
        }
    })
})


app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});


