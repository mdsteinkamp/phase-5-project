import { StyledHome } from "./styles/Home.styled"
import { NavLink } from "./styles/NavLink.styled"
import { Link } from "react-router-dom"

export default function Home() {



  return (
    <StyledHome>
      <h1>PANTRON 5000</h1>
      <h2>All of your Pantry and Recipe NEEDS</h2>
      <div>
      <NavLink to="/login">Sign In</NavLink>
      </div>
      <div>
      <NavLink to="/signup">Register Here</NavLink>
      </div>
    </StyledHome>
  )
}