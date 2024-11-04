import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

const AdminPanel = () => {

    const { login } = useContext(LoginContext);

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
            console.log(data);
        }catch(err){
            console.error("Ha ocurrido un error al listar los usuarios.", err);
        }

    }

    fetchUsers();
    return(<>
        <div>
            <h2>Admin Panel</h2>
        </div>
    </>)

}

export default AdminPanel;
