import { Link } from "react-router-dom";

const CreateAccount = () => {

    return(<>
        <div className="create-account-container">
            <form>
                <label>Username</label>
                <input type="text" name="username"/>
                <label>Password</label>
                <input type="password" name="password"/>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Age</label>
                <input type="number" name="age"/>
                <button className="btn-submit-account" type="submit">Submit</button>
                <div className="div-account"></div>
                <Link to={"/"}>
                    <button className="btn-cancel-account">Cancel</button>
                </Link>            
            </form>
        </div>

    </>)

}

export default CreateAccount;
