import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ReadUser = () => {

    const navigate = useNavigate();

    const { state, fetchUpdate, fetchPhoto, fetchDelete, handleInput, 
        handleFile, selectUser, flagPhoto, flagUpdate } = useContext(UserContext);

    return(
    <>
    <div className="read-user-container">
        {state.users.map((user) => {
            return(<div className="card" key={user._id}>
                {/*<img src={`${user.avatar}`}/>*/}
                <img src={user.avatar ? `data:image/png;base64,${btoa(
        new Uint8Array(user.avatar.data).reduce(
            (data, byte) => data + String.fromCharCode(byte), 
            ''
        )
    )}` : 'default-avatar.png'}/>
                <button className="btn-update-photo" onClick={() => {selectUser(user); flagPhoto({flag: true, id: user._id})}}></button>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.role}</p>
                <p>{user.location}</p>
                <div className="btn-container">
                    <button onClick={() => {selectUser(user); flagUpdate(true)}}>Update</button>
                    <button onClick={() => fetchDelete(user._id)}>Delete</button>
                </div>
            </div> 
            )
        })}
        </div>
        {state.flagUpdate && 
            <div className="form-update-container">
                <form className="form-create-user" onSubmit={() => fetchUpdate(state.selectUser._id)}>
                    <label>Username</label> 
                    <input type="string" value={state.selectUser.username} name="username" onChange={(e) => handleInput(e)}/>
                    <label>Password</label> 
                    <input type="password" value={state.selectUser.password} name="password" onChange={(e) => handleInput(e)}/>
                    <label>Email</label> 
                    <input type="email" value={state.selectUser.email} name="email" onChange={(e) => handleInput(e)}/>
                    <label>Firstname</label> 
                    <input type="string" value={state.selectUser.firstName} name="firstName" onChange={(e) => handleInput(e)}/>
                    <label>Lastname</label> 
                    <input type="string" value={state.selectUser.lastName} name="lastName" onChange={(e) => handleInput(e)}/>
                    <label>Role</label> 
                    <input type="string" value={state.selectUser.role} name="role" onChange={(e) => handleInput(e)}/>
                    <label>Location</label> 
                    <input type="string" value={state.selectUser.location} name="location" onChange={(e) => handleInput(e)}/>
                    <label>BirthDate</label> 
                    <input type="date" value={state.selectUser.birthdate} name="birthdate" onChange={(e) => handleInput(e)}/>
                    <button type="submit">Update</button>
                </form>
            </div>}    
            {state.flagPhoto.flag && 
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




