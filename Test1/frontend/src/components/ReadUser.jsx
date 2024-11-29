import { useEffect } from "react";
import { useState } from "react";


const ReadUser = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/readUser", {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            const data = await response.json();
            setUsers(data);
            if(!response.ok){
                const errData = response.json();
                console.log(errData.message);               
            }

        }catch(err){
            console.log("Ocurrio un error al leer los usuarios:", err);
        }
    }

    const fetchDelete = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/deleteUser/${id}`, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            });
            if(response.ok){
                console.log("Usuario eliminado con exito!");
            }else{
                const errData = await response.json();
                console.log("Ha ocurrido un error:", errData);
            }
        }catch(err){
            console.log("Ocurrio un error al querer eliminar el usuario:", err);
        }
    }


    useEffect(() => {
        fetchUsers();
    }, []);
    console.log(users);

    return(<div className="read-user-container">
        {users.map((user) => {
            return(<div className="card" key={user._id}>
                <img src={`${user.avatar}`}/>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.role}</p>
                <p>{user.location}</p>
                <button onClick={() => fetchDelete(user._id)}>Delete</button>
            </div>
    )
        })}
    </div>)

}


export default ReadUser;




