import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NewPost from "./NewPost";
import Posts from "./Posts";
import EditPost from "./EditPost";

const Dashboard = () => {

    const { login, fetchLogOut, global, dispatchGlobal, posts } = useContext(LoginContext);

    console.log(global);
    console.log(posts);
    return(<>
        <div className="top-dashboard">
            {login.rol === "Admin" ? 
                <div className="dashboard-admin">
                    <Link to={"/admin-panel"}>
                        <button>Admin Panel</button>
                    </Link>
                </div> 
                : <></>}

            <div className="dashboard-profile">
                <div>
                    <p>{login.username}</p>
                    <Link to={"/profile"}>
                        <button>Your profile</button>
                    </Link>
                </div>
                <button className="btn-logout" onClick={() => fetchLogOut()}>Log Out</button>    
            </div>
        </div>

        <div className="dashboard-container">
            <div className="new-post-container">
                {global.flagBtnNewPost && <button onClick={() => {dispatchGlobal({type: "FLAG_NEW_POST", payload: true}); dispatchGlobal({type: "FLAG_BTN_NEW_POST", payload: false})}}>New Post</button>}
                {global.flagEditPost && <EditPost/>}
                {global.flagPost && <NewPost/>}
            </div>
            <section className="section-container">
                <Posts />
            </section>
        </div>
    </>)


}


export default Dashboard;
