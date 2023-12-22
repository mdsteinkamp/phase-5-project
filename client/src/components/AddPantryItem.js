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
  console.log(user)

  if (!foodstuffs, !user) return <h1>Loading...</h1>


  // const pantryItemNameOptions = foodstuffs.map(foodstuff => ({label: foodstuff.name, value: foodstuff.id, unit: foodstuff.unit}))
  // const pantryItemUnitOptions = [
  //   {label: "Oz", value: "Oz"},
  //   {label: "Lb", value: "Lb"}, 
  //   {label: "Tbsp", value: "Tbsp"}, 
  //   {label: "Tsp", value: "Tsp"}, 
  //   {label: "Amount", value: "Oz"}, 
  // ]
    
  // function handleChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }

  // function handleSelectNameOption(option) {
  //   setSelectedNameOption(option)
  //   setSelectedUnit(option.unit)
  //   setFormData({...formData,
  //     user_id: user.id,
  //     foodstuff_id: option.value})
  // }


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
            // setFormData({
            //   name: "",
            //   unit: "",
            //   quantity: "",
            //   foodstuff_id: "",
            // })
            setErrors([])
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
          // setFormData({
          //   name: "",
          //   unit: "",
          //   quantity: "",
          //   foodstuff_id: "",
          // })
          setErrors([])
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
        <h1>Add Pantry Item</h1>git 
      </div>
      <div>
        <h3>User definable units to come later...</h3>git 
      </div>
      <div>

      </div>
      <AddPantryItemForm user={user} foodstuffs={foodstuffs} onSubmit={handleSubmit}/>
{/* 
      <div>
        <form onSubmit={handleSubmit}>

          <h3>Name</h3>
            <Select
            defaultValue={selectedNameOption}
            onChange={option => handleSelectNameOption(option)}
            options={pantryItemNameOptions}
            placeholder="Name"
            />
          <br />

          <h3>Units</h3>
          <h2>{selectedUnit}</h2>
          <br />

          <h3>Quantity</h3>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            />
            <br />
            <div>
              <button>Add Item</button>
            </div>
          </form>
        </div> */}

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