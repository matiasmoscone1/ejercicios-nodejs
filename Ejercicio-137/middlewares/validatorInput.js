const { check, validationResult } = require("express-validator");

const validatorInput = () => {
    return([
        check("username").notEmpty().isLength({min: 4, max: 16}).withMessage("El username debe contener entre 4 y 16 caracteres"),
        check("password").notEmpty().isLength({min: 4, max: 16}).withMessage("El password debe contener entre 4 y 16 caracteres"),
        check("rol").notEmpty().isLength({min: 2, max: 8}).withMessage("El username debe contener entre 4 y 16 caracteres"),
        check("email").isEmail().withMessage("El email debe respetar un formato valido de email"),
        check("age").isInt().isLength({min: 13, max: 110}).withMessage("El usuario debe ser mayor a 13 años") 
    ]);
}

const validator = (req, res, next) => {
    const { username, password, rol, email, age } = req.body;
    

}



 module.exports = validator;