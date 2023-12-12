import { StyledLogin } from "./styles/Login.styled"
import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: ""
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
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
        navigate("/")
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    });
  }

  return (
    <StyledLogin>
      <h1>Signup Here</h1>
        <form onSubmit={handleSubmit}>
          <h3>Username</h3>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <h3>Confirm Password</h3>
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
          <br />
          <button>Signup</button>
        </form>
        <button>Cancel</button>
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