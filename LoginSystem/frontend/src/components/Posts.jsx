import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Posts = () => {
    
    const { posts } = useContext(LoginContext);

    return(<div className="post-container">
        {posts.array.map((post) => {
            return(
            <div key={post._id}>
                <div>
                    <h3>{post.authorUsername}</h3>
                    <h4>{post.authorRol}</h4>
                </div>
                <div className="post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            </div>);
        })}
    </div>)

}

export default Posts;
