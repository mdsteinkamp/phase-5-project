import { StyledAddFoodstuffOrPantryItem } from "./styles/AddFoodstuff.styled"
import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import Select from 'react-select'
import { FoodstuffsContext } from "./FoodstuffsContext"
import PantryAutocomplete from "./PantryAutocomplete";

export default function AddPantryItem() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  const [selectedOption, setSelectedOption] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    quantity: "",
    category: ""
  })
  const [errors, setErrors] = useState([])

  if (!foodstuffs) return <h1>Loading...</h1>
  let options = foodstuffs.map(foodstuff => ({label: foodstuff.name, value: foodstuff.id, category: foodstuff.category}))

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
    fetch("/foodstuffs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((foodstuff) => {
          const newFoodstuffs = [...foodstuffs, foodstuff]
          setFoodstuffs(newFoodstuffs)
        })
        setFormData({
          name: "",
          unit: "",
          category: ""
        })
        setErrors([])
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    });
  }

  return (
    <StyledAddFoodstuffOrPantryItem>
      <div>
        <h1>Add Pantry Item</h1>
      </div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Name"
      />
      <div>
        <form onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <h3>Units</h3>
            <input
              type="text"
              name="unit"
              placeholder="Unit"
              value={formData.unit}
              onChange={handleChange}
            />
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
            <h3>Category</h3>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
            <br />
            <div>
              <button>Add Item</button>
            </div>
          </form>
        </div>
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