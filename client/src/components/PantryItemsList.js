import { useContext } from "react"
import { StyledUserPantry } from "./styles/UserPantry.styled"
import { UserContext } from "./UserContext"


export function PantryItemsList({ pantry_item }) {
  const {user, setUser} = useContext(UserContext)



  return (
    <StyledUserPantry>
      <div className="four-columns">
        <h3>{pantry_item.foodstuff.name}</h3>
      </div>
      <div>
        <h3>{pantry_item.quantity}</h3>
      </div>
      <div>
        <h3>{pantry_item.foodstuff.quantity}</h3>
      </div>
      <div>
        <h3>Remove</h3>
      </div>
    </StyledUserPantry>
  )
}