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

module.exports = adminController;


