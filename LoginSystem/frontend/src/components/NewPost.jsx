import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NewPost = () => {

    const { login } = useContext(LoginContext);


    return(<div className="new-post">
        <textarea cols={20} rows={5} name="new-post"/>
        <button onClick={() => fetchNewPost()}>Post</button>
    </div>)

}


export default NewPost;
