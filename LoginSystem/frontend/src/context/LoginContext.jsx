import reducer from "../reducer/reducer";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {



    return(<LoginContext.Provider value={{ }}>
        { children }
    </LoginContext.Provider>)

}

export default LoginContextProvider;
