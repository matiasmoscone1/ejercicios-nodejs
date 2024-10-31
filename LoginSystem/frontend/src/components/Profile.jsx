import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Profile = () => {

    const { login } = useContext(LoginContext);



    return(<>
        <div className="profile-container">
            <div className="items-profile">
                <p>Usuario: {login.username}</p>
                <p>Rol: {login.rol}</p>
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