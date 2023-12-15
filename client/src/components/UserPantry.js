import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"


export default function UserPantry() {
  const {user, setUser} = useContext(UserContext)
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const [isChecked, setIsChecked] = useState(true)
  const [foodstuffCheckedArray, setFoodstuffCheckedArray] = useState([])

  if (!user) return <h1>Loading...</h1>
  console.log(user)

  function handleClickChange(e) {
    console.log(e.target.checked, e.target.value)
    setIsChecked(isChecked => !isChecked)
    const newCheckedObj = {name: e.target.value, isChecked: e.target.checked}
    const newFoodstuffCheckedArray = [...foodstuffCheckedArray]
    if (newFoodstuffCheckedArray.length == 0) {
      newFoodstuffCheckedArray.push(newCheckedObj)
    } else {
      for (const obj of newFoodstuffCheckedArray) {
        if (obj.name === newCheckedObj.name) {
          obj.isChecked = newCheckedObj.isChecked
        } else {
          newFoodstuffCheckedArray.push(newCheckedObj)
        }
      }
    }
    let result = newFoodstuffCheckedArray.reduce((unique, o) => {
      if(!unique.some(obj => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])
    setFoodstuffCheckedArray(result)
  }
  console.log(isChecked)
  console.log(foodstuffCheckedArray)
  
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
            <div>
              <ul>{user.pantry_items.map(pantry_item => (
                <h4 key={pantry_item.id}>
                  <input onChange={handleClickChange} type="checkbox" value={`${pantry_item.foodstuff.name}`}></input>
                  {}
                </h4>
              ))}
            </ul>
            <button>REMOVE</button>
            </div>
          </div>
        </div>
    </StyledUserPantry>
  )
}