import Login from "../src/components/Login";
import LoginContextProvider from "../src/context/LoginContext";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import UpdateUser from "./components/UpdateUser";
import AdminPanel from "./components/adminComponents/AdminPanel";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <LoginContextProvider>
        
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/update-user" element={<UpdateUser />}/>
            <Route path="/admin-panel" element={<AdminPanel />}/>
          </Routes>
        
      </LoginContextProvider>
    </>
  )
}

export default App
