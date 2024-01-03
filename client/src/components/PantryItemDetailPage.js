import { useState, useContext } from "react"
import { StyledUserPantry } from "./styles/UserPantry.styled"
import { useParams } from "react-router"
import { UserContext } from "./UserContext"
import EditItemPage from "./EditItemPage"

export default function PantryItemDetailPage() {
  const {user, setUser} = useContext(UserContext)
  const {id} = useParams()
  const [editItem, setEditItem] = useState(false)
  const [errors, setErrors] = useState([])

  if (!user) return <h1>loading data...</h1>


  const pantryItem = user.pantry_items.find(pantry_item => pantry_item.id === parseInt(id))
  console.log(pantryItem)

  function handleUpdateItem(editedItem) {
    fetch(`/pantry_items/${pantryItem.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(editedItem)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json().then(newItem => {
          const newPantryItems = user.pantry_items.map(item => item.id === newItem.id ? newItem : item)
          const updatedUser = {...user, pantry_items: newPantryItems}
          setUser(updatedUser)
          setErrors([])
        })
      } else {
        resp.json().then(e => setErrors(e.errors))
      }
    })
    .catch(e => console.log(e))
  }


  return (
    <StyledUserPantry>
      <h1>{pantryItem.foodstuff.name}</h1>
      <h3>Units: {pantryItem.foodstuff.unit}</h3>
      <h3>Quantity: {pantryItem.quantity}</h3> 
      <button className="change-quantity-button" onClick={() => setEditItem(!editItem)}>Change Quantity</button>
      <div>
        {!editItem ? null : <EditItemPage pantryItem={pantryItem} onUpdateItem={handleUpdateItem}/>}
      </div>
      {errors.length > 0 && <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
            </ul>}
    </StyledUserPantry>
  )
}