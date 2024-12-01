import { useEffect } from "react";
import { useState } from "react";

const ReadUser = () => {

    const [users, setUsers] = useState([]);
    const [selectUser, setSelectUser] = useState({});
    const [flagUpdate, setFlagUpdate] = useState(false);
    const [flagPhoto, setFlagPhoto] = useState({
        flag: false,
        id: ""
    });
    const [selectFile, setSelectFile] = useState(null);

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
                    avatar: "/images/emiliano-martinez-seleccion-argentina-1902501.jpg",
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

    const fetchPhoto = async (e) => {
        console.log(selectUser._id);
        e.preventDefault();
        try{
            const formData = new FormData();
            formData.append("photo", selectFile);
            formData.append("userId", selectUser._id);

            const response = await fetch(`http://localhost:3000/api/updateUser/${selectUser._id}`, {
                method: "POST",
                body: formData
            });
            if(response.ok){
                console.log("Foto actualizada con exito!");
            }
        }catch(err){
            console.log("Ha ocurrido un error al subir la foto:", err)
        }
    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        setSelectUser({...selectUser, [name]:value});
    }
    
    const handleFile = (e) => {
        const file = e.target.files[0];
        setSelectFile(file);
        console.log(file);        
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
                <button onClick={() => {setSelectUser(user); setFlagPhoto({flag: true, id: user._id})}}>Update Photo</button>
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
            {flagPhoto.flag && 
                <div className="form-photo">
                    <form onSubmit={(e) => fetchPhoto(e)}>
                        <input type="file" onChange={(e) => handleFile(e)}/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            }
    </>)

}


export default ReadUser;




