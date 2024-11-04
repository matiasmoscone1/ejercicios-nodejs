

const adminMiddleware = (req, res, next) => {
    const userRole = req.headers["user-role"];
    if(userRole !== "Admin"){
        res.status(403).json({message: "Solo administradores pueden entrar a esta ruta."});
    }else{
        next();
    }
}

module.exports = adminMiddleware;