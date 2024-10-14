const User = require("../models/userModel.js");
const userController = {};

/*
userController.read = (req, res) => {

}*/

userController.create = (req, res) => {
    const { username, password, rol, email, age } = req.body;
    const newUser = new User({ username, password, rol, email, age });
    newUser.save();
    res.status(200).send("Usuario creado con exito!");
}
/*
userController.update = (req, res) => {
    
}

userController.delete = (req, res) => {
    
}*/

module.exports = userController;