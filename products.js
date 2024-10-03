const expres = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina productos");
});

router.get("/view", (req, res) => {
    res.status(200).send("TODOS LOS PRODUCTOS");
});

router.get("/category", (req, res) => {
    res.status(200).send("Selecciona una categoria de productos!");
});

