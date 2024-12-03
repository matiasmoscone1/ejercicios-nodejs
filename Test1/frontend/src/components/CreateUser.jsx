import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

const CreateUser = () => {

    const { state, handleInputCreate } = useContext(UserContext);

    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        role: "",
        location: "",
        birthdate: ""});
/*
    const handleInput = (e) => {
        const {value, name} = e.target;
        setData({...data, [name]:value});
    }*/

    const fetchCreate = async () => {
        console.log(data);
        try{
            const response = await fetch("http://localhost:3000/api/createUser",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                    email: data.email, 
                    firstname: data.firstname, 
                    lastname: data.lastname, 
                    role: data.role, 
                    location: data.location, 
                    birthdate: data.birthdate
                })
            });
            if(response.ok){
                console.log("Usuario creado con exito!");
            }else{
                const errData = await response.json();
                console.log(errData);
            }
        }catch(err){
            console.log("No se pudo crear el usuario.", err);
        }
    }
/*
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCreate();
        setData({username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        role: "",
        location: "",
        birthdate: ""});
    }
*/

    console.log(data);
    return(<div className="form-container">
        <form className="form-create-user" onSubmit={(e) => handleSubmitCreate(e)}>
            <label>Username</label> 
            <input type="string" value={state.newUser.username} name="username" onChange={(e) => handleInputCreate(e)}/>
            <label>Password</label> 
            <input type="password" value={state.newUser.password} name="password" onChange={(e) => handleInputCreate(e)}/>
            <label>Email</label> 
            <input type="email" value={state.newUser.email} name="email" onChange={(e) => handleInputCreate(e)}/>
            <label>Firstname</label> 
            <input type="string" value={state.newUser.firstname} name="firstname" onChange={(e) => handleInputCreate(e)}/>
            <label>Lastname</label> 
            <input type="string" value={state.newUser.lastname} name="lastname" onChange={(e) => handleInputCreate(e)}/>
            <label>Role</label> 
            <input type="string" value={state.newUser.role} name="role" onChange={(e) => handleInputCreate(e)}/>
            <label>Location</label> 
            <input type="string" value={state.newUser.location} name="location" onChange={(e) => handleInputCreate(e)}/>
            <label>BirthDate</label> 
            <input type="date" value={state.newUser.birthdate} name="birthdate" onChange={(e) => handleInputCreate(e)}/>
            <button type="submit">Send</button>
        </form>
    </div>)

}

export default CreateUser;
