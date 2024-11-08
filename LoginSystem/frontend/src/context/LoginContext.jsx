import reducer from "../reducer/reducer";
import reducerAdmin from "../reducer/reducerAdmin";
import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const savedLogin = JSON.parse(localStorage.getItem("login"));
    const savedUsers = JSON.parse(localStorage.getItem("users"));

    const initialState = savedLogin || {
        username: "",
        password: "",
        email: "",
        rol: "",
        isLogged: false
    };
    const initialStateAdmin = savedUsers || {
        array: []
    }

    const [login, dispatch] = useReducer(reducer, initialState);
    const [users, dispatchAdmin] = useReducer(reducerAdmin, initialStateAdmin);

    const saveCredentials = (username, password) => dispatch({ type: "SAVE_AUTH", payload: {username, password} });

    const changeLogged = () => dispatch({ type: "CHANGE_LOG" });

    const cleanData = () => dispatch({type: "CLEAN_DATA"});

    const addData = (tok) => dispatch({type: "ADD_DATA", payload: tok})

    const updateData = (obj) => dispatch({type: "UPDATE_DATA", payload: obj});

    const saveUsers = (obj) => dispatchAdmin({type: "SAVE_USERS", payload: obj});

    const fetchLogOut = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/logout", {
                method: "POST",
                credentials: "include"
                });
            if(response.ok){
                cleanData();
                changeLogged();                
                navigate("/");
                
            }            
        }catch(err){
            console.log("Hubo un error al desloguear el usuario...");
        }
    }

    const fetchUsers = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/adminRead", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "User-Role": login.rol},
                credentials: "include"
            });
            const data = await response.json();
            saveUsers(data);
            console.log(data);
        }catch(err){
            console.error("Ha ocurrido un error al listar los usuarios.", err);
        }
    }

    const fetchDelete = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/adminDelete/${id}`,{
                method: "DELETE",
                headers: {"Content-Type":"application/json", "User-Role": login.rol},
                credentials: "include"
            });
            if(response.ok){
                alert("Seguro quiere eliminar el usuario?");
                fetchUsers();
            }
        }catch(err){
            console.error("Ocurrio un problema al eliminar el usuario:", err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [login]);

    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(login)); 
        localStorage.setItem("users", JSON.stringify(users)); 
    }, [login, users]);

    return(<LoginContext.Provider value={{ login, saveCredentials, changeLogged, 
    cleanData, addData, updateData, fetchLogOut, saveUsers, users, fetchUsers, fetchDelete }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
