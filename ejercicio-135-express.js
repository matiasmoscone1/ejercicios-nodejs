/* Validación de datos con express-validator: Usa esta librería para validar los datos 
recibidos en un formulario o solicitud. */

const express = require("express");
const app = express();
require("dotenv").config();
const { check, validationResult } = require("express-validator");

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));

const validationForm = () => {
    return([
        check("name").notEmpty().isLength({ min: 4, max: 12}).withMessage("No puede estar vacio el campo Nombre..."),
        check("lastname").notEmpty().isLength({ min: 6, max: 16}).withMessage("No puede estar vacio el campo Apellido..."),
        check("email").isEmail().withMessage("Debe respetar un formato de email valido..."),
        check("adress").notEmpty().isLength({ min: 3, max: 16}).withMessage("No puede estar vacio el campo Direccion...")
    ]);
}

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido a la pagina principal!!!");
});

app.get("/validation", (req, res) => {
    res.status(200).sendFile(`${__dirname}/formValidation.html`);    
});

app.post("/validation", validationForm(), (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errores = errors.array().map((err) => {
            return({ campo: err.path, mensaje: err.msg});
        });
        return(res.status(400).json({ errors: errores }));
    }
    console.log(req.body);
    res.status(200).send("Datos recibidos correctamente");
});

app.listen(port, (err) => {
    if(err){
        console.log("Ha ocurrido un error al levantar el servidor:", err);
    }else{
        console.log("Servidor levantado en el puerto:", port);
    }
});

