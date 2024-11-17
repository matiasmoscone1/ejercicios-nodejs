import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NewPost = () => {

    const { login, dispatchGlobal } = useContext(LoginContext);


    return(<div className="new-post">
        <textarea cols={20} rows={5} name="new-post"/>
        <div className="btn-new-post">
            <button onClick={() => fetchNewPost()}>Post</button>
            <button onClick={() => {dispatchGlobal({type: "FLAG_NEW_POST", payload: false}); dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: true})}}>Cancel</button>
        </div>
    </div>)

}


export default NewPost;
