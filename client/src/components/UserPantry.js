import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"


export default function UserPantry() {
  const {user, setUser} = useContext(UserContext)
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const [isChecked, setIsChecked] = useState(true)

  if (!user) return <h1>Loading...</h1>
  console.log(user)

  function handleClickChange(e) {
    console.log(e.target.checked, e.target.value)
    setIsChecked(!isChecked)
    console.log(isChecked)
  }
  


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
            <ul>{user.pantry_items.map(pantry_item => (
              <h4 key={pantry_item.id}>
                <input onChange={handleClickChange} type="checkbox" value={`${pantry_item.foodstuff.name}`}></input>
              </h4>
            ))}
            </ul>
          </div>
        </div>
    </StyledUserPantry>
  )
}