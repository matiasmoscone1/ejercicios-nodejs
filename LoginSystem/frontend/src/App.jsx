import { useState } from "react";
import Login from "../src/components/Login";

function App() {

  const [username, setUsername] = useState("user2");
  const [password, setPassword] = useState("hola123");


  const fetchApi = () => {

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: "include",
      body: JSON.stringify({ username, password })
    }).then((response) => response.json())
    .then((data) => console.log(data));

  }

  fetchApi();

  const logout = () => {
    fetch("http://localhost:3000/api/logout", {
      method: "POST",
      credentials: "include"
    }).then((response) => response.json())
    .then((data) => console.log(data));
  }


  return (
    <>
      <p>frontend de loginsystem</p>
      <Login />
      
      <button onClick={() => logout()}>Desloguearse</button>
    </>
  )
}

export default App
