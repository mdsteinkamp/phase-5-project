import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { PantryItemsList } from "./PantryItemsList"


export default function UserPantry() {
  const {user, setUser} = useContext(UserContext)
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)

  if (!user) return <h1>Loading...</h1>
  console.log(user)
  


  return (
    <StyledUserPantry>
        <h1>My Pantry</h1>
        <div className="three-columns">
          <div>
            <PantryNavlink to="/pantry_items/new">Add Item</PantryNavlink>
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
            <ul>{user.pantry_items.map(pantry_item => (
              <h4 key={pantry_item.id}>{pantry_item.foodstuff.name}</h4>
            ))}
            </ul>
          </div>
          <div>
            <h3>Quantity</h3>
            <ul>{user.pantry_items.map(pantry_item => (
              <h4 key={pantry_item.id}>{pantry_item.quantity}</h4>
            ))}
            </ul>
          </div>
          <div>
            <h3>Units</h3>
            <ul>{user.pantry_items.map(pantry_item => (
              <h4 key={pantry_item.id}>{pantry_item.foodstuff.unit}</h4>
            ))}
            </ul>
          </div>
          <div>
            <h3>Remove</h3>
          </div>
          {/* <div className="four-columns">
            <ul>{user.pantry_items.map(pantry_item => (
              <PantryItemsList key={pantry_item.id} pantry_item={pantry_item} />
            ))}
            </ul>
          </div> */}
        </div>
    </StyledUserPantry>
  )
}