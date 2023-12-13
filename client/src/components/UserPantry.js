import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"


export default function UserPantry() {
  // const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)


  console.log(user, foodstuffs)
  


  return (
    <StyledUserPantry>
      <h1>My Pantry</h1>
      <div className="three-columns">
        <div>
          <PantryNavlink to="/foodstuffs/new">Add Item</PantryNavlink>
        </div>
        <div>
          <PantryNavlink to="/pantry_items">Scan Item</PantryNavlink>
        </div>
        <div>
          <PantryNavlink to="/pantry_items">What Can I Make</PantryNavlink>
        </div>
      </div>
      <div className="four-columns">  
        <div>
          <h3>Item</h3>
        </div>
        <div>
          <h3>Quantity</h3>
        </div>
        <div>
          <h3>Units</h3>
        </div>
        <div>
          <h3>Remove</h3>
        </div>
      </div>
    </StyledUserPantry>
  )
}