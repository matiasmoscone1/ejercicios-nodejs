const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userController = {};

/*
userController.users = async (req, res) => {

    try{
        const usuario = await User.findById(req.params.id);

    }catch(err){
        res.status(404).json({message: "No se encontro ningun usuario..."});
    }


}*/

userController.basicUpdate = async (req, res) => {

    const { id, username, password, email, age } = req.body;
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await User.findOneAndUpdate({_id: id}, {
            username: username,
            password: hashedPassword,
            email: email,
            age: age
        }, {new: true});
        if(user){
            res.status(200).json({message: "Usuario actualizado con exito!"});
        }else{
            res.status(404).json({message: "Usuario no encontrado."});
        }
    }catch(err){
        res.status(500).json({message: "No se pudo actualizar el usuario debido a problemas con el servidor."});
    }

}


module.exports = userController;