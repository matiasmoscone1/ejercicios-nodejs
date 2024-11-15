import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AdminUpdateAccount = () => {

    const { setFlagPopUpEdit, fetchUsers, login, selectedUser,
         handleNewUser, global, globalDispatch } = useContext(LoginContext);

    console.log(global);

    const fetchUpdateAccount = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/adminUpdate/${global.selectedUser._id}`, {
                method: "POST",
                headers: {"Content-Type":"application/json", "User-Role": login.rol},
                body: JSON.stringify({
                    username: global.selectedUser.username,
                    password: global.selectedUser.password,
                    rol: global.selectedUser.rol,
                    email: global.selectedUser.email,
                    age: global.selectedUser.age
                })
            });
            if(response.ok){
                //setFlagPopUpEdit(false);
                dispatchGlobal({type: "FLAG_POPUP_EDIT", payload: false});
            }else{
                const errorData = await response.json();
                if(errorData){
                    alert(`Error: ${errorData.message}`);
                }
            }
        }catch(err){
            console.error("Hubo un error al actualizar el usuario.", err);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchUpdateAccount();
        await fetchUsers();
    }

    return(<>
        <div className="admin-create-account-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Username</label>
                    <input type="text" name="username" value={global.selectedUser.username} onChange={(e) => handleNewUser(e)}/>
                    <label>Password</label>
                    <input type="password" name="password" value={global.selectedUser.password} onChange={(e) => handleNewUser(e)}/>
                    <label>Rol</label>
                    <input type="text" name="rol" value={global.selectedUser.rol} onChange={(e) => handleNewUser(e)}/>
                    <label>Email</label>
                    <input type="email" name="email" value={global.selectedUser.email} onChange={(e) => handleNewUser(e)}/>
                    <label>Age</label>
                    <input type="number" name="age" value={global.selectedUser.age} onChange={(e) => handleNewUser(e)}/>
                    <button className="btn-submit-account" type="submit">Submit</button>
                    <div className="div-account"></div>
                    <button className="btn-cancel-account" onClick={() => dispatchGlobal({type: "FLAG_POPUP_EDIT", payload: false})/*setFlagPopUpEdit(false)*/}>Cancel</button> 
                </form>
            </div></>)
    

}

export default AdminUpdateAccount;
