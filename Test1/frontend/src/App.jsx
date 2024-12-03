import CreateUser from "./components/CreateUser";
import ReadUser from "./components/ReadUser";
import { Routes, Route } from "react-router-dom";
import UserContextProvider from "./components/UserContext";

function App() {

  return (
    <>
      <h2>Frontend</h2>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<ReadUser/>}/>
          <Route path="/createUser" element={<CreateUser />}/>
        </Routes>
      </UserContextProvider>


    </>
  )
}

export default App
