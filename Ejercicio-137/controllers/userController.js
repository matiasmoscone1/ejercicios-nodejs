const User = require("../models/userModel.js");
const userController = {};
const path = require("node:path");


userController.read = async (req, res) => {
    try{
        const users = await User.find();    
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({error: "Error al obtener los datos de usuarios..."});
    }
}

userController.form = (req, res) => {
    const filePath = path.join(__dirname, "../public/form.html");
    res.status(200).sendFile(filePath);
}

userController.create = async (req, res) => {
    const { username, password, rol, email, age } = req.body;
    try{
        const newUser = new User({ username, password, rol, email, age });
        await newUser.save();
        res.status(200).send("Usuario creado con exito!");
    }catch(err){
        res.status(500).send("Ha ocurrido un error al enviar los datos del usuario...");
    }
}

userController.update = async (req, res) => {
    try{
        const userId = req.params.id;
        const { username, password, rol, email, age } = req.body;        
        const updateUser = await User.findOneAndUpdate(userId, {
            username: username,
            password: password,
            rol: rol,
            email: email,
            age: age
        }, {new: true});
        if(updateUser){
            res.status(200).send("Usuario actualizado correctamente!");
        }else{
            res.status(404).send("Usuario no encontrado...");
        }
    }catch(err){
        res.status(500).send("No se pudo hacer la actualizacion debido a un problema en el servidor:", err);
    }
}

userController.formUpdate = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(user){
        const html = ``;
    }else{
        res.status(404).send("Usuario no encontrado...");
    }
}

userController.delete = async (req, res) => {
    try{
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).send(`Usuario con el id: ${userId} eliminado con exito!`);
    }catch(err){
        res.status(500).send("No se pudo eliminar el usuario debio a un problema ocurrido en el servidor:", err);
    }

}

module.exports = userController;