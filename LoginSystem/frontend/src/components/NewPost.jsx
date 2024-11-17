import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NewPost = () => {

    const { login, dispatchGlobal, global } = useContext(LoginContext);

    console.log(login);
    const fetchNewPost = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/createPost", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: {
                    id: login._id,
                    title: global.title, 
                    content: global.content
                },
                credentials: "include"
            });
            if(response.ok){
                console.log(response);
            }
        }catch(err){
            console.log(err);
        }
    }

    return(<div className="new-post">
        <div className="title-content-container">
            <label>Title</label>
            <input type="text" name="title-post" onChange={(e) => dispatchGlobal({type: "SAVE_TITLE", payload: e.target.value})}/>
            <label>Content</label>
            <textarea cols={20} rows={5} name="content-post" onChange={(e) => dispatchGlobal({type: "SAVE_CONTENT", payload: e.target.value})}/>
        </div>
        <div className="btn-new-post">
            <button onClick={() => fetchNewPost()}>Post</button>
            <button onClick={() => {dispatchGlobal({type: "FLAG_NEW_POST", payload: false}); dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: true})}}>Cancel</button>
        </div>
    </div>)

}


export default NewPost;
