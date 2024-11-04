const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const loginController = {};
const jwt = require("jsonwebtoken");

loginController.auth =  async (req, res) => {
    
    try{
        const user = await User.findOne({username: req.body.username});

        if(!user){
            res.status(404).send("Usuario no encontrado...");
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(isMatch){
            const token = jwt.sign({userId: user._id, rol: user.rol, email: user.email, age: user.age}, "fnatic", {expiresIn: "1h"});

            res.cookie("token", token, {
                httpOnly: true, 
                secure: false, 
                maxAge: 3600000, 
                sameSite: 'Strict' 
            });
            res.status(200).json({message: "Usuario logueado con exito!!!", token: token});
        }else{
            res.status(401).json({message: "Contraseña incorrecta..."});
        }
    }catch(err){
        res.status(500).json({message: "Ha ocurrido un error al autenticar el usuario..."});
    }
}

loginController.logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({message: "Usuario deslogueado con exito!!!"});
}



module.exports = loginController;