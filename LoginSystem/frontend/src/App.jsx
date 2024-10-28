import { useState } from "react";


function App() {

  const [username, setUsername] = useState("user2");
  const [password, setPassword] = useState("hola123");

  const fetchApi = () => {

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username, password })
    }).then((response) => response.json())
    .then((data) => console.log(data));

  }

  fetchApi();

  return (
    <>
      <p>frontend de loginsystem</p>
    </>
  )
}

export default App
