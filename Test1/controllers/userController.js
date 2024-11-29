const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userController = {};


userController.read = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(404).json({message: "No se encontro ningun usuario."});
    }
}

userController.create = async (req, res) => {
    const { username, password, email, firstName, lastName, avatar,
        role, createdAt, location, birthDate } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);    
    try{
        const user = new User({username, hashedPassword, email, firstName, lastName, avatar,
            role, createdAt, location, birthDate});
        await user.save();
        res.status(200).json({message: "Usuario creado con exito!"});
    }catch(err){
        res.status(500).json({message: `Ocurrio un error al crear el usuario: ${err.message}`});
    }
}


userController.delete = async (req, res) => {
    const userId = req.params.id;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if(deletedUser){
            res.status(200).json({message: "Usuario borrado con exito!"});
        }else{
            res.status(404).json({message: "Usuario no encontrado."});
        }
    }catch(err){
        res.status(500).json({message: `Hubo un problema al borrar el usuario: ${err.message}`});
    }
}


module.exports = userController;
