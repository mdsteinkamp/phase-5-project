import { StyledAddFoodstuffOrPantryItem } from "./styles/AddFoodstuff.styled"
import { useState } from "react"
import Select from 'react-select'

export default function AddPantryItemForm({ user, foodstuffs, onSubmit }) {
  const [selectedNameOption, setSelectedNameOption] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState("")
  const [formData, setFormData] = useState({
    quantity: "",
    user_id: user.id,
    foodstuff_id: "",
  })

  let pantryItemNameOptions

  pantryItemNameOptions = (foodstuffs) ? pantryItemNameOptions = foodstuffs.map(foodstuff => ({label: foodstuff.name, value: foodstuff.id, unit: foodstuff.unit})) : null

  function handleSelectNameOption(option) {
    setSelectedNameOption(option)
    setSelectedUnit(option.unit)
    setFormData({...formData,
      user_id: user.id,
      foodstuff_id: option.value})
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(formData)
    if(formData.foodstuff_id !== "" && formData.quantity !== "") {
      setSelectedNameOption("")
      setFormData({
        quantity: "",
        user_id: user.id,
        foodstuff_id: "",
      })
    }
  }

  return (
    <StyledAddFoodstuffOrPantryItem>
      <div>
        <form onSubmit={handleSubmit}>

          <h3>Name</h3>
            <Select
            value={selectedNameOption}
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
      </div>

        {/* {errors.length > 0 &&
            <ul>{errors.map(e => (
              <ul key={e}>
                <h3>{e}</h3>
              </ul>))}
            </ul>
          } */}
    </StyledAddFoodstuffOrPantryItem>
  )

}