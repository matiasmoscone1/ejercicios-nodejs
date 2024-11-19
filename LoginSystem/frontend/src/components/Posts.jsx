import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Posts = () => {
    
    const { posts, fetchDeletePosts } = useContext(LoginContext);

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
                </div>
                <div className="post-edit-delete">
                    <td className=""><button onClick={() => {}}><i className="fas fa-edit"></i></button></td>
                    <td className=""><button onClick={() => fetchDeletePosts(post._id)}><i className="fas fa-trash-alt"></i></button></td>
                </div>
            </div>);
        })}
    </div>)

}

export default Posts;
