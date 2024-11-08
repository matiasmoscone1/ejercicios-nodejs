import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
const AdminCreateAccount = () => {

    const { setFlagPopUp } = useContext(LoginContext);
    const [dataNewUser, setDataNewUser] = useState({});

    const fetchCreateAccount = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/adminCreate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({dataNewUser})
            });
            if(response.ok){
                setFlagPopUp(false);
            }else{
                const errorData = await response.json();
                if(errorData){
                    alert(`Error: ${errorData.message}`);
                }
            }
        }catch(err){
            console.error("Ha ocurrido un error al crear la cuenta:", err);
        }
    }

    const handleNewUser = (e) => {
        const { name, value } = e.target;
        setDataNewUser({...dataNewUser, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCreateAccount();
    }

    return(<>
    <div className="admin-create-account-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input type="text" name="username" onChange={(e) => handleNewUser(e)}/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => handleNewUser(e)}/>
                <label>Rol</label>
                <input type="text" name="rol" onChange={(e) => handleNewUser(e)}/>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) => handleNewUser(e)}/>
                <label>Age</label>
                <input type="number" name="age" onChange={(e) => handleNewUser(e)}/>
                <button className="btn-submit-account" type="submit">Submit</button>
                <div className="div-account"></div>
                <button className="btn-cancel-account" onClick={() => setFlagPopUp(false)}>Cancel</button> 
            </form>
        </div></>)

}

export default AdminCreateAccount;