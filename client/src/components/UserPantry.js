import { StyledUserPantry } from "./styles/UserPantry.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { NavLink } from "react-router-dom"
import { useContext, useState, Fragment } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"


export default function UserPantry() {
  const {user, setUser} = useContext(UserContext)
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const [isChecked, setIsChecked] = useState(true)
  const [foodstuffCheckedArray, setFoodstuffCheckedArray] = useState([])
  const [errors, setErrors] = useState([])
  const [searchInput, setSearchInput] = useState("")

  if (!user) return <h1>Loading...</h1>
  const sortedUserPantryItems = [...user.pantry_items].sort((a, b) => ((a.foodstuff.name < b.foodstuff.name) ? -1 : (b.foodstuff.name > a.foodstuff.name) ? 1 : 0))
  console.log(sortedUserPantryItems)
  const shownPantryItems = searchInput !== "" ? sortedUserPantryItems.filter(item => Object.values(item.foodstuff).join(' ').toLowerCase().includes(searchInput.toLowerCase())) : sortedUserPantryItems
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

  function handleDeleteClick () {
    const itemstoDelete = foodstuffCheckedArray.filter(item => item.isChecked == true)
    console.log(itemstoDelete)
    
    Promise.all(itemstoDelete.map(item => {
      return fetch(`/pantry_items/${item.id}`, {
        method: "DELETE",
        })
      }))
      .then(results => {
        Promise.all(results.map(ingredient => {
          return ingredient
        }))
        .then(ingredients => {
          console.log(ingredients)
        })
        .catch(e => console.log(e))
      })

      
      const updatedPantryItems = [...user.pantry_items].filter(item => !itemstoDelete.find(f => f.id === item.id))
      console.log(updatedPantryItems)
      const updatedUser = {...user, pantry_items: updatedPantryItems}
      setUser(updatedUser)
  }
  
  return (
    <StyledUserPantry>
        <h1>My Pantry</h1>
        <div className="responsive-three-columns">
          <div>
            <PantryNavlink to="/pantry_items/new">Add Item</PantryNavlink>
          </div>
          <div>
            <PantryNavlink to="/pantry_items">Scan Item</PantryNavlink>
          </div>
          <div>
            <PantryNavlink to="/available_recipes">What Can I Make</PantryNavlink>
          </div>
        </div>
        <div id="search-container">
          <form>
            <label for="search">Search Your Pantry: </label>
            <input
              type="text"
              id="search"
              placeholder="Search Pantry..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
          </form>
        </div>

        <div className="grid">  
            <span>Item</span>
            <span>Quantity</span>
            <span>Units</span>
            <span>Remove</span>
        </div>
            
          <ul className="grid-list">{shownPantryItems.map(pantry_item => (
            <Fragment key={pantry_item.id}>
            <NavLink to={`/pantry_items/${pantry_item.id}`} className="list-item">{pantry_item.foodstuff.name}</NavLink>
              <h4>{pantry_item.quantity}</h4>
              <h4>{pantry_item.foodstuff.unit}</h4>
              <h4 key={pantry_item.foodstuff.name}>
                <input onChange={handleClickChange} type="checkbox" value={`${pantry_item.foodstuff.name}`}></input>
              </h4>
            </Fragment>
          ))}
          </ul>
        <div className="grid">
            <span></span>
            <span></span>
            <span></span>
            <button onClick={handleDeleteClick} className="end-button">REMOVE</button>


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