import { useEffect } from "react";
import { useState } from "react";


const ReadUser = () => {

    const [users, setUsers] = useState([]);
    const [selectUser, setSelectUser] = useState({});
    const [flagUpdate, setFlagUpdate] = useState(false);

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

    const fetchUpdate = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/updateUser/${id}`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: selectUser.username,
                    password: selectUser.password,
                    email: selectUser.email, 
                    firstName: selectUser.firstName, 
                    lastName: selectUser.lastName, 
                    avatar: "",
                    role: selectUser.role, 
                    location: selectUser.location, 
                    birthDate: selectUser.birthDate
                })
            });
            if(response.ok){
                setFlagUpdate(false);
            }
        }catch(err){
            console.log("No se pudo relizar la actualizacion del usuario:", err);
        }

    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        setSelectUser({...selectUser, [name]:value});
    }


    useEffect(() => {
        fetchUsers();
    }, []);
    console.log(users);

    console.log(selectUser);
    return(
    <>
    <div className="read-user-container">
        {users.map((user) => {
            return(<div className="card" key={user._id}>
                <img src={`${user.avatar}`}/>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.role}</p>
                <p>{user.location}</p>
                <div className="btn-container">
                    <button onClick={() => {setSelectUser(user); setFlagUpdate(true)}}>Update</button>
                    <button onClick={() => fetchDelete(user._id)}>Delete</button>                
                </div>
            </div> 
            )
        })}
        </div>
        {flagUpdate && 
            <div className="form-update-container">
                <form className="form-create-user" onSubmit={() => fetchUpdate(selectUser._id)}>
                    <label>Username</label> 
                    <input type="string" value={selectUser.username} name="username" onChange={(e) => handleInput(e)}/>
                    <label>Password</label> 
                    <input type="password" value={selectUser.password} name="password" onChange={(e) => handleInput(e)}/>
                    <label>Email</label> 
                    <input type="email" value={selectUser.email} name="email" onChange={(e) => handleInput(e)}/>
                    <label>Firstname</label> 
                    <input type="string" value={selectUser.firstName} name="firstName" onChange={(e) => handleInput(e)}/>
                    <label>Lastname</label> 
                    <input type="string" value={selectUser.lastName} name="lastName" onChange={(e) => handleInput(e)}/>
                    <label>Role</label> 
                    <input type="string" value={selectUser.role} name="role" onChange={(e) => handleInput(e)}/>
                    <label>Location</label> 
                    <input type="string" value={selectUser.location} name="location" onChange={(e) => handleInput(e)}/>
                    <label>BirthDate</label> 
                    <input type="date" value={selectUser.birthdate} name="birthdate" onChange={(e) => handleInput(e)}/>
                    <button type="submit">Update</button>
                </form>
            </div>}    
    </>)

}


export default ReadUser;




