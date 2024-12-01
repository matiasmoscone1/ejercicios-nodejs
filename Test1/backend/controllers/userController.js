const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userController = {};
const multer = require("multer");


userController.read = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(404).json({message: "No se encontro ningun usuario."});
    }
}

userController.create = async (req, res) => {
    const { username, password, email, firstname, lastname,
        role, location, birthdate } = req.body;
    console.log(req.body);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);    
    try{
        const user = new User({username, password: hashedPassword, email, firstName: firstname, lastName: lastname,
            role, createdAt: Date.now(), location, birthDate: birthdate});
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

userController.update = async (req, res) => {
    const { username, password, email, firstName, lastName, avatar,
        role, location, birthDate } = req.body;
    const userId = req.params.id;
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatedUser = await User.findByIdAndUpdate(userId, {
            username: username,
            password: hashedPassword,
            email: email,
            firstName: firstName,
            lastName: lastName,
            avatar: avatar,
            role: role,
            location: location,
            birthDate: birthDate
        }, {new: true});
        if(updatedUser){
            res.status(200).json({message: "Usuario actualizado con exito!"});
        }else{
            res.status(404).json({message: "Usuario no encontrado"});
        }
    }catch(err){
        res.status(500).json({message: `Hubo un problema al actualizar el usuario: ${err.message}`});
    }
}

userController.updatePhoto = async (req, res) => {
    console.log(req.file);
    
}


module.exports = userController;
