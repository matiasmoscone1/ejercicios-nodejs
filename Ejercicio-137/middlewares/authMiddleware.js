const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
   
        const token = req.cookies.token;
        if(!token){
            return res.status(401).send("Acceso denegado, no se proporcionó un token válido...");           
        }
        try{
            const decodedToken = jwt.verify(token, "fnatic");
            req.user = decodedToken;
            next();
        }catch(err){
            res.status(403).send("Token invalido o expirado...");
        }

}


module.exports = authMiddleware;
