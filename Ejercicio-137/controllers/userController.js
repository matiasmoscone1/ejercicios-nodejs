const User = require("../models/userModel.js");
const userController = {};
const path = require("node:path");
const bcrypt = require("bcrypt");

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
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ username, password: hashedPassword, rol, email, age });
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
        const updateUser = await User.findOneAndUpdate({_id: userId}, {
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
        const html = `<html>
            <body>
                <form action="/users/update/${user._id}" method="post">
                    <label>Username</label>
                    <input type="text" name="username" value="${user.username}"/>
                    <label>Password</label>
                    <input type="password" name="password" value="${user.password}"/>
                    <label>Rol</label>
                    <input type="text" name="rol" value="${user.rol}"/>
                    <label>Email</label>
                    <input type="email" name="email" value="${user.email}"/>
                    <label>Age</label>
                    <input type="number" name="age" value="${user.age}"/>
                    <input type="submit" value="Enviar"/>
                </form>
            </body>
        </html>`;
        res.status(200).send(html);
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

userController.profile = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user){
            const html = `<html>
            <body>
                <div class="container-profile">
                    <ul>
                        <li>Username: ${user.username}</li>
                        <li>Age: ${user.age}</li>
                        <li>Rol: ${user.rol}</li>
                        <li>Email: ${user.email}</li>                
                    </ul>
                </div>
            </body>
        </html>`;
        res.status(200).send(html);
        }else{
            res.status(404).send("Usuario no encontrado...");
        }
    }catch(err){
        res.status(500).send("Hubo un problema con el servidor...");
    }
}

userController.settings = async (req, res) => {
    
    const user = await User.findById(req.params.id);
    const html = `<html>
        <body>
            <div>
                <h2>Modifica tus propiedades</h2>
                <form action="/users/settings/update/${user._id}>
                    <label>Usuario</label>
                    <input type="text" name="username" value="${user.username}"/>
                    <label>Contraseña</label>
                    <input type="password" name="password" value="${user.password}"/>
                    <label>Email</label>
                    <input type="text" name="email" value="${user.email}"/>
                    <label>Age</label>
                    <input type="text" name="age" value="${user.age}"/>
                    <input type="submit" value="Actualizar"/>
                </form>
            </div>
        </body>
    </html>`
    res.status(200).send(html);
}

userController.settingUpdate = (req, res) => {
    

}




module.exports = userController;