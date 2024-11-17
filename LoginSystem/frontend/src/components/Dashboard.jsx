import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import NewPost from "./NewPost";

const Dashboard = () => {

    const { login, fetchLogOut, global, dispatchGlobal } = useContext(LoginContext);

    console.log(global);
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
                <button onClick={() => dispatchGlobal({type: "FLAG_NEW_POST", payload: true})}>New Post</button>
                {global.flagPost && <NewPost/>}
            </div>
            <section className="section-container">
                <h3>Noticias</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
            </section>
        </div>
    </>)


}


export default Dashboard;
