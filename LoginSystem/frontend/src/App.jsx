import { useState } from "react";
import Login from "../src/components/Login";
import LoginContextProvider from "../src/context/LoginContext";

function App() {

  return (
    <>
      <p>frontend de loginsystem</p>

      <LoginContextProvider>
        <Login />
      </LoginContextProvider>
      
    </>
  )
}

export default App
