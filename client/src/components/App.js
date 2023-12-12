import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import '../App.css'
import Header from "./Header"
import Home from "./Home"
import { StyledAppContainer } from "./styles/App.Container.styled"
import Login from "./Login"
import Signup from "./Signup"

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  return (
    <StyledAppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </StyledAppContainer>
  );
}