import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Profile = () => {

    const { login } = useContext(LoginContext);

    return(<>
        <div className="profile-container">
            <div className="items-profile">
                <p>{login.username}</p>
                <p>{login.rol}</p>
                <p>{login.email}</p>
            <Link to={"/update-user"}>
                <button>Edit profile</button>
            </Link>
            </div>
        </div>
    </>)

}


export default Profile;