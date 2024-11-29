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
    

    try{
        const user = new User
    }
}




module.exports = userController;
