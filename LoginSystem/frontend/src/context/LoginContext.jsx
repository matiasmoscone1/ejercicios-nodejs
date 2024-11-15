import reducer from "../reducer/reducer";
import reducerAdmin from "../reducer/reducerAdmin";
import reducerGlobal from "../reducer/reducerGlobal";
import { createContext } from "react";
import { useReducer, useEffect, useState } from "react";
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
        originalArray: [],
        array: []
    }

    const initialStateGlobal = {
        dataNewUser: {},
        selectedUser: {},
        filterOptions: {
            username: "",
            rol: "",
            age: ""
        },
        flagPost: false
    };

    const [login, dispatch] = useReducer(reducer, initialState);
    const [users, dispatchAdmin] = useReducer(reducerAdmin, initialStateAdmin);
    const [global, dispatchGlobal] = useReducer(reducerGlobal, initialStateGlobal);
   

    const [dataNewUser, setDataNewUser] = useState({});
    const [flagPopUp, setFlagPopUp] = useState(false);
    const [flagPopUpEdit, setFlagPopUpEdit] = useState(false); 
    const [selectedUser, setSelectedUser] = useState({});
    const [filterOptions, setFilterOptions] = useState({
        username: "",
        rol: "",
        age: ""
    });

    const saveCredentials = (username, password) => dispatch({ type: "SAVE_AUTH", payload: {username, password} });

    const changeLogged = () => dispatch({ type: "CHANGE_LOG" });

    const cleanData = () => dispatch({type: "CLEAN_DATA"});

    const addData = (tok) => dispatch({type: "ADD_DATA", payload: tok})

    const updateData = (obj) => dispatch({type: "UPDATE_DATA", payload: obj});

    const saveUsers = (obj) => dispatchAdmin({type: "SAVE_USERS", payload: obj});

    const filterUsername = (obj, filterOption) => dispatchAdmin({type: "FILTER_USERNAME", payload: {obj, filter: filterOption}});

    const filterRole = (obj, filterOption) => dispatchAdmin({type: "FILTER_ROLE", payload: {obj, filter: filterOption}});

    const filterAge = (obj, filterOption) => dispatchAdmin({type: "FILTER_AGE", payload: {obj, filter: parseInt(filterOption)}});

    const clearFilters = () => dispatchAdmin({type: "CLEAR_FILTERS"});

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
            sortArray();
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
    
    const handleNewUser = (e) => {
        const { name, value } = e.target;
        setDataNewUser({...dataNewUser, [name]:value});
        setSelectedUser({...selectedUser, [name]:value});
    }

    const sortArray = () => {
        const sortedArray = [...users.array].sort((a,b) => {
            if(a.rol === "Admin" && b.rol !== "Admin"){
                return -1;
            }
            if(a.rol !== "Admin" && b.rol === "Admin"){
                return 1;
            }
            return 0;
        });
        dispatchAdmin({type: "SORT_USERS", payload: sortedArray});
    }

    useEffect(() => {
        fetchUsers();
    }, [login]);

    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(login)); 
        localStorage.setItem("users", JSON.stringify(users)); 
    }, [login, users]);

    return(<LoginContext.Provider value={{ login, saveCredentials, changeLogged, 
    cleanData, addData, updateData, fetchLogOut, saveUsers, users, fetchUsers, fetchDelete,
    flagPopUp, setFlagPopUp, flagPopUpEdit, setFlagPopUpEdit, selectedUser, setSelectedUser,
    dataNewUser, setDataNewUser, handleNewUser, filterUsername, clearFilters, filterRole,
    filterAge, filterOptions, setFilterOptions }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
