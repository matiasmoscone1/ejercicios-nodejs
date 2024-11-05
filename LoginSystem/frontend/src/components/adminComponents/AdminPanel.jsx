import { LoginContext } from "../../context/LoginContext";
import { useContext, useEffect } from "react";

const AdminPanel = () => {

    const { login, saveUsers, users } = useContext(LoginContext);

    console.log(login.rol);

    const fetchUsers = async () => {
        
        try{
            const response = await fetch("http://localhost:3000/api/adminRead", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "User-Role": login.rol},
                credentials: "include"
            });
            const data = await response.json();
            await saveUsers(data);
            console.log(data);
        }catch(err){
            console.error("Ha ocurrido un error al listar los usuarios.", err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [login]);

    
    return(<>
        <div className="admin-panel-container">
            <h2>Admin Panel</h2>
            <table border={1} className="table-container">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Username</td>
                        <td>Password</td>
                        <td>Role</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>

        </div>
    </>)

}

export default AdminPanel;
