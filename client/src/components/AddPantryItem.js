import { StyledAddFoodstuffOrPantryItem } from "./styles/AddFoodstuff.styled"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import Select from 'react-select'
import AddPantryItemForm from "./AddPantryItemForm"

export default function AddPantryItem() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  // const [selectedNameOption, setSelectedNameOption] = useState(null)
  // const [selectedUnit, setSelectedUnit] = useState("")
  // const [formData, setFormData] = useState({
  //   quantity: "",
  //   user_id: "",
  //   foodstuff_id: "",
  // })
  const [errors, setErrors] = useState([])
  const [resetForm, setResetForm] = useState(false)
  const [renderItemAdded, setRenderItemAdded] = useState(false)


  console.log(user)

  if (!foodstuffs, !user) return <h1>Loading...</h1>

  function handleSubmit(newPantryItem) {
    console.log(newPantryItem)
    if ((user.pantry_items.map(item => item.foodstuff_id).includes(newPantryItem.foodstuff_id))) {
      console.log(true)
      const pantryItem = user.pantry_items.find(item => item.foodstuff.id === newPantryItem.foodstuff_id)
      const updatedNewPantryItem = {...newPantryItem, quantity: parseInt(pantryItem.quantity) + parseInt(newPantryItem.quantity) }
      fetch(`/pantry_items/${pantryItem.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(updatedNewPantryItem)
      })
      .then(resp => {
        if (resp.ok) {
          resp.json().then(newItem => {
            const newPantryItems = user.pantry_items.map(item => item.id === newItem.id ? newItem : item)
            const updatedUser = {...user, pantry_items: newPantryItems}
            setUser(updatedUser)
            setErrors([])
            setRenderItemAdded(true)
          })
        } else {
          resp.json().then(e => setErrors(e.errors))
        }
      })
    } else {
      fetch("/pantry_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPantryItem),
      })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((pantryItem) => {
            const newPantryItems = [...user.pantry_items, pantryItem]
            const newUser = {...user, pantry_items: newPantryItems}
            setUser(newUser)
          })
          setErrors([])
          setRenderItemAdded(true)
        } else {
          resp.json().then(e => {
            setErrors(e.errors)
            console.log(errors)
          })
        }
      });
    }
  }

  return (
    <StyledAddFoodstuffOrPantryItem>
      <div>
        <h1>Add Pantry Item</h1>
      </div>
      <div>
        <h3>User definable units to come later...If the ingredient is not in the list please add in "Add Ingredient" above. </h3>
      </div>
      <div>

      </div>
      <AddPantryItemForm user={user} foodstuffs={foodstuffs} onSubmit={handleSubmit} resetForm={resetForm} />
      {renderItemAdded ? <h2>Added!</h2> : null}

      {errors.length > 0 &&
          <ul>{errors.map(e => (
            <ul key={e}>
              <h3>{e}</h3>
            </ul>))}
          </ul>
        }
    </StyledAddFoodstuffOrPantryItem>
  )
}