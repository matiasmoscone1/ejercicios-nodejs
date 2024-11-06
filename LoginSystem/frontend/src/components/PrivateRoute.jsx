import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({element}) => {
    const {login} = useContext(LoginContext);

    const navigate = useNavigate();

    if(!login.isLogged){
        return navigate("/");
    }else{
        return element;
    }

}

export default PrivateRoute;