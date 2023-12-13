import { StyledHeader } from "./styles/Header.styled"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Header() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout() {
    fetch(("/logout"), {
      method: "DELETE",
    })
    .then(setUser(null))
    .then(navigate("/"))
  }

  return (
    <StyledHeader>
      <h1>Pantron 5000</h1>
      {user ?
        <div className="button-div">
          <button onClick={handleLogout}>Log Out</button> 
        </div>
        : 
        null
      }

    </StyledHeader>
  )
}