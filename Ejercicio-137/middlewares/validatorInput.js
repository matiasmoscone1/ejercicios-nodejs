const { check, validationResult } = require("express-validator");

const validatorInput = (req, res, next) => {
    const { username, password, rol, email, age } = req.body;



}


 module.exports = validatorInput;