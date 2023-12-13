import { StyledNavbar } from "./styles/Navbar.styled"
import { HeaderNavLink } from "./styles/HeaderNavLink.styled"

export default function NavBar() {


  return (
    <StyledNavbar>
      <div>
        <HeaderNavLink to="/login">Pantry</HeaderNavLink>
      </div>
      <div>
        <HeaderNavLink to="/signup">Recipes</HeaderNavLink>
      </div>
    </StyledNavbar>
  )
}