import { useState } from "react";

const CreateUser = () => {

    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        role: "",
        location: "",
        birthdate: ""});

    const handleInput = (e) => {
        const {value, name} = e.target;
        setData({...data, [name]:value});
    }

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


    console.log(data);
    return(<div className="form-container">
        <form className="form-create-user" onSubmit={(e) => handleSubmit(e)}>
            <label>Username</label> 
            <input type="string" value={data.username} name="username" onChange={(e) => handleInput(e)}/>
            <label>Password</label> 
            <input type="password" value={data.password} name="password" onChange={(e) => handleInput(e)}/>
            <label>Email</label> 
            <input type="email" value={data.email} name="email" onChange={(e) => handleInput(e)}/>
            <label>Firstname</label> 
            <input type="string" value={data.firstname} name="firstname" onChange={(e) => handleInput(e)}/>
            <label>Lastname</label> 
            <input type="string" value={data.lastname} name="lastname" onChange={(e) => handleInput(e)}/>
            <label>Role</label> 
            <input type="string" value={data.role} name="role" onChange={(e) => handleInput(e)}/>
            <label>Location</label> 
            <input type="string" value={data.location} name="location" onChange={(e) => handleInput(e)}/>
            <label>BirthDate</label> 
            <input type="date" value={data.birthdate} name="birthdate" onChange={(e) => handleInput(e)}/>
            <button type="submit">Send</button>
        </form>
    </div>)

}

export default CreateUser;
