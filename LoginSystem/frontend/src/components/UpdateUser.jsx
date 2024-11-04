import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UpdateUser = () => {

    const { login, updateData } = useContext(LoginContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: login.id,
        username: login.username,
        password: login.password,
        email: login.email,
        age: login.age
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleBasicUpdate = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/basicUpdate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify({
                    id: formData.id,
                    username: formData.username, 
                    password: formData.password,
                    email: formData.email, 
                    age: formData.age})
            });
            if(response.ok){
                updateData(formData);
                navigate("/profile");
            }
        }catch(err){
            console.error("Ha ocurrido un error al actualizar el usuario:", err);
        }
    }

    return(<>
        <div className="update-user-container">
            <form onSubmit={(e) => handleBasicUpdate(e)} method="POST">
                <label>Username</label>
                <input type="text" value={formData.username} name="username" required onChange={(e) => handleChange(e)}/>
                <label>Password</label>
                <input type="password" value={formData.password} name="password" required onChange={(e) => handleChange(e)}/>
                <label>Email</label>
                <input type="email" value={formData.email} name="email" required onChange={(e) => handleChange(e)}/>
                <label>Age</label>
                <input type="number" value={formData.age} name="age" required onChange={(e) => handleChange(e)}/>
                <div>
                    <button type="submit">Save</button>
                    <Link to={"/profile"}>
                        <button>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    </>)

}

export default UpdateUser;