import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

const CreateUser = () => {

    const { state, handleInputCreate, handleSubmitCreate } = useContext(UserContext);

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
