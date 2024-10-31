import reducer from "../reducer/reducer";
import { createContext } from "react";
import { useReducer } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

    const initialState = {
        username: "",
        password: "",
        email: "",
        rol: "",
        isLogged: false
    };

    const [login, dispatch] = useReducer(reducer, initialState);

    const saveCredentials = (username, password) => dispatch({ type: "SAVE_AUTH", payload: {username, password} });

    const changeLogged = () => dispatch({ type: "CHANGE_LOG" });

    const cleanData = () => dispatch({type: "CLEAN_DATA"});

    const addData = (tok) => dispatch({type: "ADD_DATA", payload: tok})

    return(<LoginContext.Provider value={{ login, saveCredentials, changeLogged, cleanData, addData }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
