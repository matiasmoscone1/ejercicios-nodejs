import { LoginContext } from "../../context/LoginContext";
import AdminCreateAccount from "./AdminCreateAccount";
import AdminUpdateAccount from "./AdminUpdateAccount";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {

    const { login, users, fetchLogOut, fetchDelete, flagPopUp, setFlagPopUp,
        flagPopUpEdit, setFlagPopUpEdit, setSelectedUser, filterUsername,
    clearFilters, filterRole, filterAge, filterOptions, setFilterOptions, dispatchGlobal, global } = useContext(LoginContext);
  
    console.log(global);

    const handleSelectUser = (user) => {
        //setFlagPopUpEdit(true);
        //setSelectedUser(user);
        dispatchGlobal({type: "SELECTED_USER", payload: user});
        dispatchGlobal({type: "FLAG_POPUP_EDIT", payload: true})
    }

    const handleFilter = (e) => {
        const { name, value } = e.target;
        dispatchGlobal({type: "FILTER_OPTIONS", payload: {...global.filterOptions, [name]:value}});
        //setFilterOptions({...filterOptions, [name]: value});
    }

    return(<>
        {global.flagPopUp && <AdminCreateAccount />}
        {global.flagPopUpEdit && <AdminUpdateAccount />}
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
            <div className="filters">
                <div className="filter-container">
                    <div>
                        <p>Filter by <strong>Username</strong></p>
                        <input type="text" value={global.filterOptions.username} name="username" onChange={(e) => handleFilter(e)}/>
                        <button onClick={() => {filterUsername(users, global.filterOptions.username); setFilterOptions({username: "", rol: "", age: ""})}}>Filter</button>
                    </div>
                    <div>
                        <p>Filter by <strong>Role</strong></p>
                        <input type="text" value={filterOptions.rol} name="rol" onChange={(e) => handleFilter(e)}/>
                        <button onClick={() => {filterRole(users, filterOptions.rol); setFilterOptions({username: "", rol: "", age: ""})}}>Filter</button>
                    </div>
                    <div>
                        <p>Filter by <strong>Age</strong></p>
                        <input type="number" value={filterOptions.age} name="age" onChange={(e) => handleFilter(e)}/> 
                        <button onClick={() => {filterAge(users, filterOptions.age); setFilterOptions({username: "", rol: "", age: ""})}}>Filter</button>
                    </div>
                </div>
                <div className="btn-clear-filters">
                    <button onClick={() => {clearFilters()}}>Clear Filter</button>
                </div>
            </div>
            <table border={1} className="table-container">
                <thead>
                    <tr className="tr-create-user" colSpan={7}>
                        <td colSpan={3}>Usuarios totales: {users.array.length}</td>
                        <td colSpan={3}></td>
                        <td colSpan={2}><button onClick={() => dispatchGlobal({type: "FLAG_POPUP", payload: true})/*setFlagPopUp(true)*/}>Create User</button></td>
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
                            <td className="btn-table"><button onClick={() => handleSelectUser(user)}><i className="fas fa-edit"></i></button></td>
                            <td className="btn-table"><button onClick={() => fetchDelete(user._id)}><i className="fas fa-trash-alt"></i></button></td>
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
