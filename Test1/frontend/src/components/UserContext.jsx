import { createContext } from "react"
import reducer from "../reducer/reducer";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {


    


    return(<UserContext.Provider value={{}}>
        { children }
    </UserContext.Provider>)

}


