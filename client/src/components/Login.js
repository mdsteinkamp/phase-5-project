import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext"
import { StyledLogin } from "./styles/Login.styled"

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState([])
  const {setUser} = useContext(UserContext)

  const navigate = useNavigate()

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
        setUser(user)
        navigate("/pantry_items")
      })} else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    })
  }

  return (
    <StyledLogin>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Sign In</button>
      </form>
      <h3>Not a member?</h3>
        <Link to="/signup">
          <button>Register Here</button>
        </Link>
      {errors.length > 0 &&
        <ul>{errors.map(e => (
          <ul key={e}>
            <h3>{e}</h3>
          </ul>))}
        </ul>
      }
    </StyledLogin>
  )
}