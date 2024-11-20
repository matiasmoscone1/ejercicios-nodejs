import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const EditPost = () => {

    const { login, dispatchGlobal, global, fetchPosts } = useContext(LoginContext);

    console.log(global.flagEdit);

    const fetchEditPost = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/updatePost/${global.flagEdit.obj._id}`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    title: global.flagEdit.obj.title, 
                    content: global.flagEdit.obj.content,
                    username: login.username,
                    rol: login.rol
                }),
                credentials: "include"
            });
            if(response.ok){
                dispatchGlobal({type: "COUNT_POST", payload: 1});
                dispatchGlobal({type: "FLAG_EDIT_POST", payload: false});
                dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: true});
                fetchPosts();
            }else{
                const errData = await response.json();
                alert(`Error: ${errData.message}`);
            }
        }catch(err){
            console.log("Ocurrio un problema al editar el post", err);
        }
    }

    return(<div className="new-post">
        <div className="title-content-container">
            <label>Title</label>
            <input type="text" name="title-post" value={global.flagEdit.obj.title} onChange={(e) => dispatchGlobal({type: "EDIT_POST_TITLE", payload: e.target.value})}/>
            <label>Content</label>
            <textarea cols={20} rows={5} name="content-post" value={global.flagEdit.obj.content} onChange={(e) => dispatchGlobal({type: "EDIT_POST_CONTENT", payload: e.target.value})}/>
        </div>
        <div className="btn-new-post">
            <button onClick={() => fetchEditPost()}>Edit</button>
            <button onClick={() => {dispatchGlobal({type: "FLAG_EDIT_POST", payload: false}); dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: true})}}>Cancel</button>
        </div>
    </div>)

}


export default EditPost;
