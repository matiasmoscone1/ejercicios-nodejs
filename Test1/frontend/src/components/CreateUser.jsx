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

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const fetchCreate = async () => {
        try{
            const response = fetch("http://localhost:3000/api/createUser", 
            )
        }

    }

    console.log(data);
    return(<div className="form-container">
        <form className="form-create-user" onSubmit={(e) => handleSubmit(e)}>
            <label>Username</label> 
            <input type="string" name="username" onChange={(e) => handleInput(e)}/>
            <label>Password</label> 
            <input type="password" name="password" onChange={(e) => handleInput(e)}/>
            <label>Email</label> 
            <input type="email" name="email" onChange={(e) => handleInput(e)}/>
            <label>Firstname</label> 
            <input type="string" name="firstname" onChange={(e) => handleInput(e)}/>
            <label>Lastname</label> 
            <input type="string" name="lastname" onChange={(e) => handleInput(e)}/>
            <label>Role</label> 
            <input type="string" name="role" onChange={(e) => handleInput(e)}/>
            <label>Location</label> 
            <input type="string" name="location" onChange={(e) => handleInput(e)}/>
            <label>BirthDate</label> 
            <input type="date" name="birthdate" onChange={(e) => handleInput(e)}/>
            <input type="submit" value="Send" />
        </form>
    </div>)

}

export default CreateUser;
