import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {

    const { login, saveCredentials, changeLogged } = useContext(LoginContext);
    
    const navigate = useNavigate();

    const fetchApi = async () => {
        const {username, password} = login;

        try{
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify({ username, password })
            });
            if(response.ok){
                changeLogged();
                navigate("/dashboard");
            }
        }catch(err){
            console.log(err);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        saveCredentials(e.target.username.value, e.target.password.value);
    }

    useEffect(() => {
        if(login.username && login.password){
            fetchApi();
        }
    }, [login.username, login.password]);

    return(
    <>
    {!login.isLogged ? 
    <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Username</label>
            <input type="text" name="username" required/>
            <label>Password</label>
            <input type="password" name="password" required/>
            <button type="submit">Log In</button>
        </form>
    </div>
    : <div>
        <h2>Usuario logueado con exito!!!</h2>
    </div>
    }
    </>)

}

export default Login;

