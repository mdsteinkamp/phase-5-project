import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import '../App.css'
import Header from "./Header"

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>

      </Routes>
    </div>
  );
}