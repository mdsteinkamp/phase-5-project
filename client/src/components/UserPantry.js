import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"

export default function UserPantry() {


  return (
    <StyledUserPantry>
      <h1>My Pantry</h1>
      <div class="three-columns">
        <div>
          <PantryNavlink to="/pantry_items">Add Item</PantryNavlink>
        </div>
        <div>
          <PantryNavlink to="/pantry_items">Scan Item</PantryNavlink>
        </div>
        <div>
          <PantryNavlink to="/pantry_items">What Can I Make</PantryNavlink>
        </div>
      </div>
    </StyledUserPantry>
  )
}