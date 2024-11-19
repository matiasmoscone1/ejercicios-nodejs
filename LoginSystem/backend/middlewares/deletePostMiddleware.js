const Post = require("../models/postModel");

const deletePostMiddleware = async (req, res, next) => {

    console.log(req.body.username);
    try{
        const post = await Post.find(req.params.id);
        if(post.authorUsername !== req.body.username || post.authorRol !== "Admin"){
            res.status(404).json({message: "No se puede eliminar este posteo."});
        }else{
            next();
        }
    }catch(err){
        res.status(500).json({message: "Error en el servidor al eliminar el posteo."});
    }
}


module.exports = deletePostMiddleware;
