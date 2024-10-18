
const adminMiddleware = (req, res, next) => {

    if(req.user.rol !== "Admin"){
        res.status(404).send("Solo tiene acceso el admin a esta ruta...");
    }
    next();
}


module.exports = adminMiddleware;