import { useReducer, useEffect } from "react";
import { createContext } from "react"
import reducer from "../reducer/reducer";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const initialState = {
        users: [],
        selectUser: {},
        flagUpdate: false,
        flagPhoto: {
            flag: false,
            id: ""
        },
        selectFile: null,
        newUser: {
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            role: "",
            location: "",
            birthdate: ""}
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchUsers = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/readUser", {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            const data = await response.json();
            dispatch({type: "SAVE_USERS", payload: data});
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

    const fetchCreate = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/createUser",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: state.newUser.username,
                    password: state.newUser.password,
                    email: state.newUser.email, 
                    firstname: state.newUser.firstname, 
                    lastname: state.newUser.lastname, 
                    role: state.newUser.role, 
                    location: state.newUser.location, 
                    birthdate: state.newUser.birthdate
                })
            });
            if(response.ok){
                console.log("Usuario creado con exito!");
            }else{
                const errData = await response.json();
                console.log(errData);
            }
        }catch(err){
            console.log("No se pudo crear el usuario.", err);
        }
    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        setSelectUser({...selectUser, [name]:value});
    }
    
    const handleInputCreate = (e) => {
        const {value, name} = e.target;
        dispatch({type: "HANDLE_INPUT_CREATE", payload: {[name]:value}});
    }

    const handleFile = (e) => {
        const file = e.target.files[0];
        setSelectFile(file);
        console.log(file);
    }

    const handleSubmitCreate = (e) => {
        e.preventDefault();
        fetchCreate();
        dispatch({type: "CLEAR_CREATE", payload: ""});
    }


    const selectUser = (user) => {
        dispatch({type: "SELECT_USER", payload: user});
    }

    const flagPhoto = (flag, id) => {
        dispatch({type: "FLAG_PHOTO", payload: {flag: flag, id: id}});
    }

    const flagUpdate = (flag) => {
        dispatch({type: "FLAG_UPDATE", payload: flag});
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(state);

    return(<UserContext.Provider value={{
        state, 
        fetchPhoto, 
        fetchUpdate, 
        fetchDelete,
        handleInput,
        handleInputCreate,
        handleFile,
        handleSubmitCreate,
        selectUser,
        flagPhoto,
        flagUpdate
        }}>
        { children }
    </UserContext.Provider>)

}

export default UserContextProvider;
