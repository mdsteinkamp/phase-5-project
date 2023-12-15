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
  const [errors, setErrors] = useState([])

  if (!user) return <h1>Loading...</h1>
  console.log(user)

  function handleClickChange(e) {
    console.log(e.target.checked, e.target.value)
    setIsChecked(isChecked => !isChecked)
    const itemID = user.pantry_items.find(item => item.foodstuff.name === e.target.value).id
    console.log(itemID)
    const newCheckedObj = {name: e.target.value, isChecked: e.target.checked, id: itemID}
    const id = user.pantry_items.find(item => item.foodstuff.name === newCheckedObj.name).id
    console.log(id)
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

  const handleDeleteClick = async() => {
    const itemstoDelete = foodstuffCheckedArray.filter(item => item.isChecked == true)
    console.log(itemstoDelete)
    await Promise.all(itemstoDelete.map(item => {
      return fetch(`pantry_items/${item.id}`, {
        method: "DELETE",
      })
      .then(resp => {
        if (resp.ok) {
          // const updatedPantryItems = user.pantry_items.filter(pantry_item => pantry_item.id !== item.id)
          // const updatedUser = {...user, pantry_items: updatedPantryItems}
          // setUser(updatedUser)

        } else {
          resp.json().then(e => {
            setErrors(e.errors)
          })
        }
      })
    }))
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
            <div>
              <ul>{user.pantry_items.map(pantry_item => (
                <h4 key={pantry_item.id}>
                  <input onChange={handleClickChange} type="checkbox" value={`${pantry_item.foodstuff.name}`}></input>
                  {}
                </h4>
              ))}
            </ul>
            <button onClick={handleDeleteClick}>REMOVE</button>
            </div>
          </div>
        </div>
        {errors.length > 0 &&
          <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
          </ul>
        }
    </StyledUserPantry>
  )
}