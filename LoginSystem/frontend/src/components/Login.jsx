import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {

    const { login, saveCredentials, changeLogged } = useContext(LoginContext);
    

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
            }
        }catch(err){
            console.log(err);
        }
    }

    const fetchLogOut = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/logout", {
                method: "POST",
                credentials: "include"
                });
            if(response.ok){
                changeLogged();
            }            
        }catch(err){
            console.log("Hubo un error al desloguear el usuario...");
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
        <button onClick={() => fetchLogOut()}>Log Out</button>
    </div>
    }
    </>)

}

export default Login;

