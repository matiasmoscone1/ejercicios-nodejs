import { useReducer } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const initialState = {
        users: [],
        selectUser: {},
        flagUpdate: false,
        flagPhoto: {
            flag: false,
            id: ""
        },
        selectFile: null
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchUsers = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/readUser", {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            const data = await response.json();
            setUsers(data);
            if(!response.ok){
                const errData = response.json();
                console.log(errData.message);               
            }
        }catch(err){
            console.log("Ocurrio un error al leer los usuarios:", err);
        }
    }

    const fetchDelete = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/deleteUser/${id}`, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            });
            if(response.ok){
                console.log("Usuario eliminado con exito!");
            }else{
                const errData = await response.json();
                console.log("Ha ocurrido un error:", errData);
            }
        }catch(err){
            console.log("Ocurrio un error al querer eliminar el usuario:", err);
        }
    }

    const fetchUpdate = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/updateUser/${id}`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: selectUser.username,
                    password: selectUser.password,
                    email: selectUser.email, 
                    firstName: selectUser.firstName, 
                    lastName: selectUser.lastName, 
                    avatar: "/images/emiliano-martinez-seleccion-argentina-1902501.jpg",
                    role: selectUser.role, 
                    location: selectUser.location, 
                    birthDate: selectUser.birthDate
                })
            });
            if(response.ok){
                setFlagUpdate(false);
            }
        }catch(err){
            console.log("No se pudo relizar la actualizacion del usuario:", err);
        }
    }

    const fetchPhoto = async (e) => {
        console.log(selectUser._id);
        e.preventDefault();

        try{
            const formData = new FormData();
            formData.append("photo", selectFile);
            formData.append("userId", selectUser._id);
    
            const response = await fetch(`http://localhost:3000/api/updatePhoto/${selectUser._id}`, {
                method: "POST",
                body: formData
            });
            if(response.ok){
                console.log("Foto actualizada con exito!");
            }
        }catch(err){
            console.log("Ha ocurrido un error al subir la foto:", err)
        }
    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        setSelectUser({...selectUser, [name]:value});
    }
    
    const handleFile = (e) => {
        const file = e.target.files[0];
        setSelectFile(file);
        console.log(file);
    }


    useEffect(() => {
        fetchUsers();
    }, []);



    return(<UserContext.Provider value={{state}}>
        { children }
    </UserContext.Provider>)

}


