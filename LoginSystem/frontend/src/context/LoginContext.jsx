import reducer from "../reducer/reducer";
import reducerAdmin from "../reducer/reducerAdmin";
import { createContext } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

    const navigate = useNavigate();

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

    const initialState = {
        username: "",
        password: "",
        email: "",
        rol: "",
        isLogged: false
    };
    const initialStateAdmin = {
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

    return(<LoginContext.Provider value={{ login, saveCredentials, changeLogged, cleanData, addData, updateData, fetchLogOut, saveUsers, users }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
