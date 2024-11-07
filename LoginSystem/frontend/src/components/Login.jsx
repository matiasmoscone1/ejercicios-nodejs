import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { jwtDecode } from "jwt-decode";
const Login = () => {

    const { login, saveCredentials, changeLogged, addData } = useContext(LoginContext);
    
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
                const data = await response.json();
                if(data.token){
                    const decoded = jwtDecode(data.token);
                    addData(decoded);
                    console.log(decoded);
                }
                changeLogged();
                navigate("/dashboard");
            }
        }catch(err){
            console.error("Ha ocurrido un error al autenticar el usuario:", err);
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
    
    <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Username</label>
            <input type="text" name="username" required/>
            <label>Password</label>
            <input type="password" name="password" required/>
            <button className="btn-login" type="submit">Log In</button>
            <div className="sign-in-line"></div>
            <Link to={"/create-account"}>
                <button className="btn-sign-in" type="submit">Sign Up</button>
            </Link>
        </form>
        
    </div>
  
    
    </>)

}

export default Login;

