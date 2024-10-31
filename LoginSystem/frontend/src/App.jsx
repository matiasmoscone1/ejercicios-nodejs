import Login from "../src/components/Login";
import LoginContextProvider from "../src/context/LoginContext";

function App() {

  return (
    <>
      <LoginContextProvider>
        <Login />
      </LoginContextProvider>
    </>
  )
}

export default App
