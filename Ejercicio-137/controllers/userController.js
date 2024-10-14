const User = require("../models/userModel.js");
const userController = {};

userController.read = (req, res) => {
    res.status(200).send("Aqui sera el endpoint del json de usuarios");
}

userController.create = (req, res) => {
    const { username, password, rol, email, age } = req.body;
    const newUser = new User({ username, password, rol, email, age });
    newUser.save();
    res.status(200).send("Usuario creado con exito!");
}

userController.update = (req, res) => {
    res.status(200).send("Aqui se mostrara para cambiar algnu usuario");
}

userController.delete = (req, res) => {
    res.status(200).send("Aqui sera el delete de usuario");
}

module.exports = userController;