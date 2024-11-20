import reducer from "../reducer/reducer";
import reducerAdmin from "../reducer/reducerAdmin";
import reducerGlobal from "../reducer/reducerGlobal";
import reducerPost from "../reducer/reducerPost";
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
        flagPopUp: false,
        flagPopUpEdit: false,
        flagPost: false,
        flagEdit: {
            flag: false,
            id: ""
        },
        flagBtnNewPost: true,
        title: "",
        content: "",
        countPost: 0
    };

    const initialStatePost = {
        array: []
    };


    const [login, dispatch] = useReducer(reducer, initialState);
    const [users, dispatchAdmin] = useReducer(reducerAdmin, initialStateAdmin);
    const [global, dispatchGlobal] = useReducer(reducerGlobal, initialStateGlobal);
    const [posts, dispatchPost] = useReducer(reducerPost, initialStatePost);


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

    const savePosts = (obj) => dispatchPost({type: "SAVE_POST", payload: obj})

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
                fetchUsers();
            }
        }catch(err){
            console.error("Ocurrio un problema al eliminar el usuario:", err);
        }
    }

    const fetchPosts = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/readPost", {
                method: "GET",
                headers: {"Content-Type":"application/json"},
                credentials: "include"
            });
            if(response.ok){
                const data = await response.json();
                savePosts(data);
            }
        }catch(err){    
            console.error("Ha ocurrido un error al obtener los datos de los posteos.");
        }

    }

    const fetchDeletePosts = async (id) => {
        try{
            const response = await fetch(`http://localhost:3000/api/deletePost/${id}`, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    username: login.username,
                    rol: login.rol
                }),
                credentials: "include"
            });
            if(response.ok){
                dispatchGlobal({type: "COUNT_POST", payload: -1});
                fetchPosts();
            }else{
                const errData = await response.json();
                alert(`Error: ${errData.message}`);
            }
        }catch(err){    
            console.error("Ha ocurrido un error al obtener los datos de los posteos.", err);
        }

    }

    
    const handleNewUser = (e) => {
        const { name, value } = e.target;
        dispatchGlobal({type: "DATA_NEW_USER", payload: {...global.dataNewUser, [name]:value}});
        dispatchGlobal({type: "SELECTED_USER", payload: {...global.selectedUser, [name]:value}});
    }

    const sortArray = async () => {
        const sortedArray = await [...users.array].sort((a,b) => {
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
        sortArray();
    }, [login]);

    
    useEffect(() => {
        fetchPosts();
    }, [global.countPost]);

    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(login)); 
        localStorage.setItem("users", JSON.stringify(users)); 
    }, [login, users]);

    return(<LoginContext.Provider value={{ 
        login, 
        saveCredentials, 
        changeLogged, 
        cleanData, 
        addData, 
        updateData, 
        fetchLogOut, 
        saveUsers, 
        users, 
        posts,
        fetchPosts,
        fetchUsers, 
        fetchDelete,
        global,
        dispatchGlobal,
        flagPopUp: global.flagPopUp, 
        setFlagPopUp: (value) => dispatchGlobal({type: "FLAG_POPUP", payload: value}), 
        flagPopUpEdit: global.flagPopUpEdit, 
        setFlagPopUpEdit: (value) => dispatchGlobal({type: "FLAG_POPUP_EDIT", payload: value}), 
        selectedUser: global.selectedUser, 
        setSelectedUser: (value) => dispatchGlobal({type: "SELECTED_USER", payload: value}),
        dataNewUser: global.dataNewUser, 
        setDataNewUser: (value) => dispatchGlobal({type: "DATA_NEW_USER", payload: value}), 
        handleNewUser, 
        fetchDeletePosts,
        filterUsername, 
        clearFilters, 
        filterRole,
        filterAge, 
        filterOptions: global.filterOptions, 
        setFilterOptions: (options) => dispatchGlobal({type: "FILTER_OPTIONS", payload: options}) }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
