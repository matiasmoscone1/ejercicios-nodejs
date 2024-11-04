

const adminMiddleware = (req, res, next) => {

    if(req.user.rol !== "Admin"){
        res.status(403).json({message: "Solo administradores pueden entrar a esta ruta."});
    }else{
        next();
    }
}

module.exports = adminMiddleware;