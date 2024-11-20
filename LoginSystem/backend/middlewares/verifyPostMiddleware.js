const Post = require("../models/postModel");

const verifyPostMiddleware = async (req, res, next) => {

    try{
        const post = await Post.findById(req.params.id);
        if(req.body.rol === "Admin"){
            return next();
        }else{
            if(post.authorUsername !== req.body.username){
                return res.status(404).json({message: "No puede modificar el posteo de otro usuario."});
            }else{
                return next();
            }
        }
    }catch(err){
        res.status(500).json({message: "Error en el servidor al eliminar el posteo."});
    }
}


module.exports = verifyPostMiddleware;
