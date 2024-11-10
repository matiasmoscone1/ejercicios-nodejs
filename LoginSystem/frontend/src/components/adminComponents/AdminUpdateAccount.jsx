import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AdminUpdateAccount = () => {

    const { setFlagPopUpEdit, fetchUsers, login, selectedUser, handleNewUser, dataNewUser } = useContext(LoginContext);

    const fetchUpdateAccount = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/adminUpdate", {
                method: "POST",
                headers: {"Content-Type":"application/json", "User-Role": login.rol},
                body: JSON.stringify({username: selectedUser.username,
                    username: selectedUser.username,
                    password: selectedUser.password,
                    rol: selectedUser.rol,
                    email: selectedUser.email,
                    age: selectedUser.age
                }),
                credentials: "include",
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
            console.error("Hubo un error al actualizar el usuario.");
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUpdateAccount();
        fetchUsers();
    }


    return(<>
        <div className="admin-create-account-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Username</label>
                    <input type="text" name="username" value={selectedUser.username} onChange={(e) => handleNewUser(e)}/>
                    <label>Password</label>
                    <input type="password" name="password" value={selectedUser.password} onChange={(e) => handleNewUser(e)}/>
                    <label>Rol</label>
                    <input type="text" name="rol" value={selectedUser.rol} onChange={(e) => handleNewUser(e)}/>
                    <label>Email</label>
                    <input type="email" name="email" value={selectedUser.email} onChange={(e) => handleNewUser(e)}/>
                    <label>Age</label>
                    <input type="number" name="age" value={selectedUser.age} onChange={(e) => handleNewUser(e)}/>
                    <button className="btn-submit-account" type="submit">Submit</button>
                    <div className="div-account"></div>
                    <button className="btn-cancel-account" onClick={() => setFlagPopUpEdit(false)}>Cancel</button> 
                </form>
            </div></>)
    

}

export default AdminUpdateAccount;
