const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const loginController = {}


loginController.login = (req, res) => {
    const html = `<html>
        <body>
            <form action="/users/login" method="post">
                <label>Username</label>
                <input type="text" name="username" required/>
                <label>Password</label>
                <input type="password" name="password" required/>
                <input type="submit" value="Log in"/>
            </form>
        </body>
    </html>`;
    res.status(200).send(html);
}


loginController.validLogin = async (req, res) => {
    
    try{
        const user = await User.findOne({ username: req.body.username });
    
        if(!user){
            res.status(404).send("Usuario no encontrado...");
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
    
        if(isMatch){

            const token = jwt.sign({userId: user._id, rol: user.rol}, "fnatic", {expiresIn: "1h"});
        
            res.cookie("token", token, {
                httpOnly: true, 
                secure: false, 
                maxAge: 3600000, 
                sameSite: 'Strict' 
            });
            return res.status(200).send({ message: "Usuario logueado con exito!!!" });
        }else{
            res.status(404).send("Contraseña incorrecta...");
        } 
    }catch(err){
        res.status(500).send("Ha ocurrido un error al autenticar el usuario...");
    }

}


loginController.logout = (req, res) => {
    //console.log(res.cookie("token"));
    const destroyCookie = res.clearCookie("token");
    if(destroyCookie){
        res.status(200).send("Usuario deslogueado con exito!!!");
    }else{
        res.status(404).send("No se pudo desloguear el usuario...");
    }
}


module.exports = loginController;