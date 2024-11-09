import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AdminUpdateAccount = () => {

    const { setFlagPopUpEdit, fetchUsers, selectedUser, handleNewUser, dataNewUser } = useContext(LoginContext);

    const fetchUpdateAccount = () => {
        

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
