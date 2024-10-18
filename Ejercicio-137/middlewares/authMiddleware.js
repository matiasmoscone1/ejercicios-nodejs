const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];

    try{
        if(!token){
            res.status(401).send("Acceso denegado, no proporciono un token valido...");
        }0    
        const decodedToken = jwt.verify(token, "fnatic");
        req.user = decodedToken;
        next();
    }catch(err){
        res.status(403).send("Token invalido o expirado...");
    }

}


module.exports = authMiddleware;
