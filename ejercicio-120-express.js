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
    saveUninitialized: true,
    cookie: { secure: false }
}));

const isAuthenticated = (req, res, next) => {
    if(req.session.user){
        return next();
    }else{
        res.redirect("/login");
    }
};

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!!!");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formAuth.html`);
});

app.post("/login", (req, res) => {
    console.log(req.body);
    if(req.body.username === users.user && req.body.password === users.pass){
        console.log(req.session);
        req.session.user = req.body.username;
        res.redirect("/controlpanel");
    }else{
        res.send("Usuario o contraseña incorrecta...");
    }
});

app.get("/controlpanel", isAuthenticated, (req, res) => {
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


