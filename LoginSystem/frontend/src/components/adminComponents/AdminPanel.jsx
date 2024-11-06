import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {

    const { login, users, fetchLogOut } = useContext(LoginContext);

    return(<>
        {login.rol === "Admin" ? <div className="admin-panel-container">
            <div className="profile-home">
                <Link to={"/dashboard"}>
                    <button>Home</button>
                </Link>
            </div>
            <div className="dashboard-profile">
                <div>
                    <p>{login.username}</p>
                    <Link to={"/profile"}>
                        <button>Your profile</button>
                    </Link>
                </div>
                <button className="btn-logout" onClick={() => fetchLogOut()}>Log Out</button>    
            </div>
            <h2>Admin Panel</h2>
            <div className="filter-container">
                <div>
                    <p>Filter by <strong>Username</strong></p>
                    <input type="text" name="filter-username"/>
                    <button>Filter</button>
                </div>
                <div>
                    <p>Filter by <strong>Role</strong></p>
                    <input type="text" name="filter-role"/>
                    <button>Filter</button>
                </div>
                <div>
                    <p>Filter by <strong>Age</strong></p>
                    <input type="text" name="filter-age"/> 
                    <button>Filter</button>
                </div>
            </div>
            <table border={1} className="table-container">
                <thead>
                    <tr className="tr-create-user" colSpan={7}>
                        <td colSpan={6}></td>
                        <td colSpan={2}><button>Create User</button></td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td>Username</td>
                        <td>Password</td>
                        <td>Role</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td className="tr-btn-table" colSpan={2}>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.array.map((user) => {
                        return(
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.rol}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td className="btn-table"><button><i className="fas fa-edit"></i></button></td>
                            <td className="btn-table"><button><i className="fas fa-trash-alt"></i></button></td>
                        </tr>)
                    })}
                </tbody>
            </table>

        </div>: <div>
                <h3>Solo pueden entrar administradores a esta seccion.</h3>
                
            </div>}
    </>)

}

export default AdminPanel;
