const { check, validationResult } = require("express-validator");

const validatorInput = [
    check("username").notEmpty().isLength({min: 4, max: 16}).withMessage("El username debe contener entre 4 y 16 caracteres"),
    check("password").notEmpty().isLength({min: 4, max: 16}).withMessage("El password debe contener entre 4 y 16 caracteres"),
    check("rol").notEmpty().isLength({min: 2, max: 8}).withMessage("El username debe contener entre 4 y 16 caracteres"),
    check("email").isEmail().withMessage("El email debe respetar un formato valido de email"),
    check("age").isInt({min: 13}).withMessage("El usuario debe ser mayor a 13 años") 
];


const validator = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errores = errors.array().map((err) => {
            return({ campo: err.path, mensaje: err.msg });
        });
        res.status(404).json({errors: errores});
    }
    next();
}

const validatorUpdate = [
    check("username").notEmpty().isLength({min: 4, max: 16}).withMessage("El username debe contener entre 4 y 16 caracteres"),
    check("password").notEmpty().isLength({min: 4, max: 16}).withMessage("El password debe contener entre 4 y 16 caracteres"),    
    check("email").isEmail().withMessage("El email debe respetar un formato valido de email"),
    check("age").isInt({min: 13}).withMessage("El usuario debe ser mayor a 13 años") 
];







 module.exports = { validatorInput, validator };