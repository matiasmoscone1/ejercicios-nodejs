import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Posts = () => {
    
    const { posts, fetchDeletePosts, dispatchGlobal } = useContext(LoginContext);

    return(<div className="post-container">
        {posts.array.map((post) => {
            return(
            <div key={post._id} className="post-structure">
                <div className="post-user-rol">
                    <span>User: <strong>{post.authorUsername}</strong></span>
                    <span>Rol: <strong>{post.authorRol}</strong></span>
                </div>
                <div className="post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p className="date-post">Created at: { new Date(post.createdAt).toLocaleString() }</p>
                </div>
                <div className="post-edit-delete">
                    <button onClick={() => {dispatchGlobal({type: "FLAG_EDIT_POST", payload: {flag: true, obj: post}}); dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: false})}}><i className="fas fa-edit"></i></button>
                    <button onClick={() => {alert("Seguro quiere eliminar el posteo?");fetchDeletePosts(post._id)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>);
        })}
    </div>)

}

export default Posts;
