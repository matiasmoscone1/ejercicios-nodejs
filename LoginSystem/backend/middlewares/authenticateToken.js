const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        res.status(401).json({message: "Se requiere un token."});
    }

    jwt.verify(token, "fnatic", (err, user) => {
        if(err){
            res.status(403).json({message: "El token proporcionado no es valido."});
        }
    });
    req.user = user;
    next();

}


module.exports = authenticateToken;