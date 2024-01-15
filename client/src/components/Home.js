import { StyledHome } from "./styles/Home.styled"
import { HomeNavLink } from "./styles/HomeNavLink.styled"

export default function Home() {

  return (
    <StyledHome>
      <h1>PANTRON 5000</h1>
      <h2>All of your Pantry and Recipe NEEDS</h2>
      <div>
      <HomeNavLink to="/login">Sign In</HomeNavLink>
      </div>
      <div>
      <HomeNavLink to="/signup">Register Here</HomeNavLink>
      </div>
    </StyledHome>
  )
}