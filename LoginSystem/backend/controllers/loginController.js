const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const loginController = {};
const jwt = require("jsonwebtoken");

loginController.auth =  async (req, res) => {

    try{
        console.log(req.body);
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
        const user = await User.findOne(req.body.username);

        if(!user){
            res.status(404).send("Usuario no encontrado...");
        }

        const isMatch = await bcrypt.compare(user.password, hashedPassword);

        if(isMatch){
            const token = jwt.sign({userId: user._id, rol: user.rol}, "key123", {expiresIn: "1h"});

            res.cookie("token", token, {
                httpOnly: true, 
                secure: false, 
                maxAge: 3600000, 
                sameSite: 'Strict' 
            });
            res.status(200).send("Usuario logueado con exito!!!");
        }else{
            res.status(404).send("Contraseña incorrecta...");
        }
    }catch(err){
        res.status(500).send("Hubo un problema con el servidor...");
    }

}

module.exports = loginController;