const User = require("../models/userModel");
const Post = require("../models/postModel");
const bcrypt = require("bcrypt");
const userController = {};
const mongoose = require("mongoose");


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
        });
        if(user){
            res.status(200).json({message: "Usuario actualizado con exito!"});
        }else{
            res.status(404).json({message: "Usuario no encontrado."});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message: "No se pudo actualizar el usuario debido a problemas con el servidor."});
    }

}

userController.createUser = async (req, res) => {
    
    const { username, password, email, age } = req.body;
    console.log(req.body);
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({username, password: hashedPassword, rol: "User", email, age});
        await newUser.save();
        res.status(200).json({message: "Usuario creado con exito!"});
    }catch(err){
        res.status(500).json({message: "Error al crear la cuenta."});
    }
}

userController.createPost = async (req, res) => {
    const { id, title, content, author } = req.body;

    try{    
        const user = await User.findOne({_id: id});
        if(user){
            const newPost = new Post({
                title: title,
                content: content,
                author: user._id
            });
            await newPost.save();
            res.status(200).json({message: "Post creado con exito!"});
        }else{
            res.status(404).json({message: "Usuario no encontrado."});
        }
    }catch(err){
        res.status(500).json({message: "Hubo un problema con el servidor al momento de crear el post."});
    }

}



module.exports = userController;