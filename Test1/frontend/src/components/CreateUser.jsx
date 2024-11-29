

const CreateUser = () => {

    

    return(<div className="form-container">
        <form className="form-create-user">
            <label>Username</label> 
            <input type="string" name="username" />
            <label>Password</label> 
            <input type="password" name="password" />
            <label>Email</label> 
            <input type="email" name="email" />
            <label>Firstname</label> 
            <input type="string" name="firstname" />
            <label>Lastname</label> 
            <input type="string" name="lastname" />
            <label>Role</label> 
            <input type="string" name="role" />
            <label>Location</label> 
            <input type="string" name="location" />
            <label>BirthDate</label> 
            <input type="date" name="birthdate" />
            <input type="submit" value="Send" />
        </form>
    </div>)

}

export default CreateUser;
