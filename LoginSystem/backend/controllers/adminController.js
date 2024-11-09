const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const adminController = {};


adminController.read = async (req, res) => {
    try{
        const collection = await User.find();
        res.status(200).json(collection);
    }catch(err){
        res.status(404).json({message: "No se encontro ningun usuario."});
    }
}

adminController.delete = async (req, res) => {
    const userId = req.params.id;
    try{
        await User.findByIdAndDelete(userId);
        res.status(200).json({message: "Usuario eliminado con exito!"});        
    }catch(err){
        res.status(500).json({message: "Error al eliminar el usuario."});
    }
}

adminController.create = async (req, res) => {
    const { username, password, rol, email, age } = req.body;
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({username, password: hashedPassword, rol, email, age});
        await newUser.save();
        res.status(200).json({message: "Usuario creado con exito!"});
    }catch(err){
        res.status(500).json({message: "Hubo un problema al crear la cuenta."});
    }
}

adminController.update = async (req, res) => {

    

}

module.exports = adminController;


