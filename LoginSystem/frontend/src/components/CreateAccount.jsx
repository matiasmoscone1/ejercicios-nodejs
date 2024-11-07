import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {

    const [dataNewUser, setDataNewUser] = useState({});
    const navigate = useNavigate();

    const fetchCreateUser = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/createUser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: dataNewUser.username,
                    password: dataNewUser.password,
                    email: dataNewUser.email,
                    age: dataNewUser.age
                })
            });
            if(response.ok){
                alert("Usuario creado con exito, sera redirigido al Login!");
                navigate("/");
            }else{
                const errorData = await response.json();
                console.log(errorData);
                if(errorData){
                    alert(`Error: ${errorData.message}`);   
                }    
            }
        }catch(err){
            console.error("Ha ocurrido un error al crear la cuenta:", err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();    
        fetchCreateUser();
    }

    const handleNewUser = (e) => {
        const {name, value} = e.target;
        setDataNewUser({...dataNewUser, [name]:value});        
    }

    return(<>
        <div className="create-account-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input type="text" name="username" onChange={(e) => handleNewUser(e)}/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => handleNewUser(e)}/>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) => handleNewUser(e)}/>
                <label>Age</label>
                <input type="number" name="age" onChange={(e) => handleNewUser(e)}/>
                <button className="btn-submit-account" type="submit">Submit</button>
                <div className="div-account"></div>
                <Link to={"/"}>
                    <button className="btn-cancel-account">Cancel</button>
                </Link>            
            </form>
        </div>

    </>)

}

export default CreateAccount;
