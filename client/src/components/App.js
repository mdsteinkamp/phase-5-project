import { useState, useEffect, useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext"
import '../App.css'
import Header from "./Header"
import Home from "./Home"
import { StyledAppContainer } from "./styles/App.Container.styled"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"

export default function App() {
  const [count, setCount] = useState(0)
  const {user, setUser} = useContext(UserContext)

  console.log(user)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count))
  // }, [])

  return (
    <StyledAppContainer>
      <Header />
      {user ?
        <NavBar />
        : 
        null
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </StyledAppContainer>
  );
}