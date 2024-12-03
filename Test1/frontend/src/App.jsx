import CreateUser from "./components/CreateUser";
import ReadUser from "./components/ReadUser";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <h2>Frontend</h2>
      <Routes>
        <Route path="/" element={<ReadUser/>}/>
        <Route path="/createUser" element={<CreateUser />}/>
      </Routes>



    </>
  )
}

export default App
