import Login from "../src/components/Login";
import LoginContextProvider from "../src/context/LoginContext";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import UpdateUser from "./components/UpdateUser";
import AdminPanel from "./components/adminComponents/AdminPanel";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <LoginContextProvider>
        
          <Routes>
            <Route path="/" element={<Login />}/>
            
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>}/>}/>
            <Route path="/profile" element={<PrivateRoute element={<Profile/>}/>}/>
            <Route path="/update-user" element={<PrivateRoute element={<UpdateUser/>}/>}/>
            <Route path="/admin-panel" element={<PrivateRoute element={<AdminPanel/>}/>}/>
          </Routes>
        
      </LoginContextProvider>
    </>
  )
}

export default App
