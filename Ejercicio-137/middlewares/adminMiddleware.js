
const adminMiddleware = (req, res, next) => {

    if(req.user.rol !== "Admin"){
        res.status(404).send("Solo tiene acceso el admin a esta ruta...");
    }else{
        next();
    }
}


module.exports = adminMiddleware;