const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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
    console.log(req.body);

    try{
        const user = await User.findOne({ username: req.body.username });
    
        if(!user){
            //return {success: false, message: "Usuario no encontrado..."};
            res.status(404).send("Usuario no encontrado...");
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
    
        if(isMatch){
            //return {success: true, message: "Autenticacion exitosa!!!"};
            res.status(200).send("Usuario logueado con exito!!!");
        }else{
            //return {success: false, message: "Contraseña incorrecta..."};
            res.status(404).send("Contraseña incorrecta...");
        } 
    }catch(err){
        //return {success: false, message: "Error en el servidor..."};
        res.status(500).send("Ha ocurrido un error al autenticar el usuario...");
    }

}



module.exports = loginController;