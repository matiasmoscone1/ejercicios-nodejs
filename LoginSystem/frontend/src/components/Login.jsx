
const Login = () => {

    return(<div className="login-container">
        <form>
            <label>Username</label>
            <input type="text" required/>
            <label>Password</label>
            <input type="password" required/>
            <button type="submit">Log In</button>
        </form>
    </div>)

}

export default Login;

