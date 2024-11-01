import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

const UpdateUser = () => {

    const { login } = useContext(LoginContext);
    

    const handleBasicUpdate = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/basicUpdate");
            
        }
    }

    return(<>
        <div className="update-user-container">
            <form onSubmit={handleBasicUpdate()}>
                <label>Username</label>
                <input type="text" value={login.username} required/>
                <label>Password</label>
                <input type="password" value={login.password} required/>
                <label>Email</label>
                <input type="email" value={login.email} required/>
                <label>Age</label>
                <input type="text" value={login.age} required/>
                <button>Send</button>
            </form>
        </div>
    </>)

}

export default UpdateUser;