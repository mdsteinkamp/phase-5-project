import { StyledAddFoodstuffOrPantryItem } from "./styles/AddFoodstuff.styled"
import { useState, useContext, useEffect } from "react"
import { FoodstuffsContext } from "./FoodstuffsContext"
import Select from 'react-select'
import AddFoodstuffUnits from "./AddFoodstuffUnits"

export default function AddFoodstuff() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [unitOptions, setUnitOptions] = useState([])
  const [selectedUnitOption, setSelectedUnitOption] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    unit: ""
  })
  const [errors, setErrors] = useState([])

  const categoryOptions = ["Cooking Liquid", "Dairy", "Fruit",  "Grain", "Protein", "Spice", "Sugar", "Vegetable"].map(option => ({label: option, value: option}))

  const foodstuffUnits = {
    "cookingLiquid": ["Cups", "Oz", "Tbsp", "Tsp"],
    "dairy": ["Cups", "Oz"],
    "fruit": ["Cups", "Lbs", "Whole Item"], 
    "grain": ["Cups", "Grams", "Whole Item"], 
    "protein": ["Lbs", "Cups"], 
    "spice": ["Tbsp", "Tsp", "Grams", "Cups"],
    "sugar": ["Cups", "Grams", "Tbsp", "Tsp"],
    "vegetable": ["Cups", "Lbs", "Whole Item"]
  }

  let availableUnits = []

  function handleSelectCategoryOption(option) {
    setSelectedUnitOption(null)
    setSelectedCategoryOption(option)
    availableUnits = Object.entries(foodstuffUnits).find(f => f[0].toLowerCase() === option.value.toLowerCase().replaceAll(" ", ""))
    const updatedAvailableUnits = availableUnits[1].map(option => ({label: option, value: option}))
    setUnitOptions([...unitOptions, updatedAvailableUnits])
    setFormData({...formData,
      category: option.value})
  }

  function handleSelectUnitOption(option) {
    setSelectedUnitOption(option)
    setFormData({...formData,
      unit: option.value})
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
          category: "",
          unit: ""
        })
        setErrors([])
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    })
  }

  return (
    <StyledAddFoodstuffOrPantryItem>
      <div>
        <h1>Add Food Item</h1>
      </div>
      <div>
        <h4>Add a basic ingredient here. You can select items from this list to add to your personal pantry!</h4>
      </div>

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
            <h3>Category</h3>
            <Select
              value={selectedCategoryOption}
              onChange={option => handleSelectCategoryOption(option)}
              options={categoryOptions}
              placeholder="Category"
            />
            <br />
            <h3>Units</h3>
            <Select
              value={selectedUnitOption}
              onChange={option => handleSelectUnitOption(option)}
              options={unitOptions[unitOptions.length -1]}
              placeholder="Category"
            />
            <br />            <div>
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