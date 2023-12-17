import { StyledNavbar } from "./styles/Navbar.styled"
import { NavbarNavLink } from "./styles/NavbarNavLink.styled"

export default function NavBar() {


  return (
    <StyledNavbar>
      <div>
        <NavbarNavLink to="/pantry_items">Pantry</NavbarNavLink>
      </div>
      <div>
        <NavbarNavLink to="/recipes">Recipes</NavbarNavLink>
      </div>
      <div>
        <NavbarNavLink to="/foodstuffs/new">Add Ingredient</NavbarNavLink>
      </div>
    </StyledNavbar>
  )
}