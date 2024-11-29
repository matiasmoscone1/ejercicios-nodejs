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
            </div>
    )
        })}
    </div>)

}


export default ReadUser;




