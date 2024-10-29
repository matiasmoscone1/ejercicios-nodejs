import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {

    const { login, saveCredentials } = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveCredentials(e.target.username.value, e.target.password.value);
        console.log(login);
    }

    return(<div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Username</label>
            <input type="text" name="username" required/>
            <label>Password</label>
            <input type="password" name="password" required/>
            <button type="submit">Log In</button>
        </form>
    </div>)

}

export default Login;

