const User = require("../models/userModel");

const verificationMiddleware = async (req, res, next) => {

    const {username, email} = req.body;

    try{
        const verifyUser = await User.findOne({ username });
        if(verifyUser){
            res.status(400).json({message: "El nombre de usuario ya existe."});
        }
        const verifyEmail = await User.findOne({ email });
        if(verifyEmail){
            res.status(400).json({message: "El email ingresado ya existe."});
        }
        next();
    }catch(err){
        res.status(500).json({message: "Error al verificar usuario y email."});
    }

}

module.exports = verificationMiddleware;


