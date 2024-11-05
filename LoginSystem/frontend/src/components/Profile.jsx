import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Profile = () => {

    const { login, fetchLogOut } = useContext(LoginContext);

    return(<>
        <div className="profile-container">
            <div className="profile-home">
                <Link to={"/dashboard"}>
                    <button>Home</button>
                </Link>
            </div>
            <div className="profile-logout">
                <p>{login.username}</p>
                <button className="btn-logout" onClick={() => fetchLogOut()}>Log Out</button>
            </div>
            <div className="items-profile">
                <p>Usuario: {login.username}</p>
                <p>Role: {login.rol}</p>
                <p>Email: {login.email}</p>
                <p>Edad: {login.age}</p>                
            <Link to={"/update-user"}>
                <button>Edit profile</button>
            </Link>
            </div>
        </div>
    </>)

}


export default Profile;