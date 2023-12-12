import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/testing" element={<h1>TestRoute</h1>}>
        </Route>
        <Route path="/" element={<h1>Page Count: {count}</h1>}>
        </Route>
      </Routes>
    </div>
  );
}