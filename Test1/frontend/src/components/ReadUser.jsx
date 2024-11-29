const { useState } = require("react")


const ReadUser = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/readUser", {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            if(response.ok){
                setUsers(response.json());
            }else{
                const errData = response.json();
                console.log(errData.message);
            }
        }catch(err){
            console.log("Ocurrio un error al leer los usuarios:", err);
        }
    }


    fetchUsers();

    return(<div className="read-user-container">
        
    </div>)

}







