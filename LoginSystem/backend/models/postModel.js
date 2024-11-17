const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    authorUsername: {type: String, required: true},
    authorRol: {type: String, required: true}, 
    createdAt: {type: Date, default: Date.now}
});


const Post = mongoose.model("Post", postSchema);


module.exports = Post;
