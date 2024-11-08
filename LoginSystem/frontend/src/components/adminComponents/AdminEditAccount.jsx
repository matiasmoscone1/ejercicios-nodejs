import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const AdminEditAccount = () => {

    const { setFlagPopUpEdit, login, fetchUsers, selectedUser, setSelectedUser } = useContext(LoginContext);

        

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
                    <button className="btn-cancel-account" onClick={() => setFlagPopUpEdit(false)}>Cancel</button> 
                </form>
            </div></>)
    

}

export default AdminEditAccount;
