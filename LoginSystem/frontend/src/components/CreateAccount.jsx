import { Link } from "react-router-dom";

const CreateAccount = () => {

    const [dataNewUser, setDataNewUser] = useState({});

    const fetchCreateUser = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/createUser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: {

                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();    

    }

    const handleNewUser = (e) => {
        const {name, value} = e.target;
        setDataNewUser({...dataNewUser, [name]:value});        
    }

    return(<>
        <div className="create-account-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input type="text" name="username" onChange={(e) => handleNewUser(e)}/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => handleNewUser(e)}/>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) => handleNewUser(e)}/>
                <label>Age</label>
                <input type="number" name="age" onChange={(e) => handleNewUser(e)}/>
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
