const User = require("../models/userModel");

const userController = {};

/*
userController.users = async (req, res) => {

    try{
        const usuario = await User.findById(req.params.id);

    }catch(err){
        res.status(404).json({message: "No se encontro ningun usuario..."});
    }


}*/



module.exports = userController;