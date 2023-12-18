import { useState, useContext } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { Link } from "react-router-dom"
import Select from 'react-select'
import { Routes, Route } from "react-router-dom"


export default function AddRecipeIngredients({ onHandleChangeRender }) {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  const [selectedNameOption, setSelectedNameOption] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState("")
  const [recipeIngredients, setRecipeIngredients] = useState([])

  // const recipeIngredients = []

  const [ingredientFormData, setIngredientFormData] = useState({
    quantity: "",
    user_id: "",
    foodstuff_id: "",
  })
  const [renderAddIngredient, setRenderAddIngredient] = useState("name")

  if (!foodstuffs, !user) return <h1>Loading...</h1>



  function handleIngredientChange(e) {
    const name = e.target.name
    const value = e.target.value
    setIngredientFormData({
      ...ingredientFormData,
      [name]: value
    })
  }

  console.log(ingredientFormData)
  console.log(recipeIngredients)

  const pantryItemNameOptions = foodstuffs.map(foodstuff => ({label: foodstuff.name, value: foodstuff.id, unit: foodstuff.unit}))

  function handleSelectNameOption(option) {
    setSelectedNameOption(option)
    setSelectedUnit(option.unit)
    setIngredientFormData({...ingredientFormData,
      user_id: user.id,
      foodstuff_id: option.value})
  }

  function handleAddIngredient() {
    setRecipeIngredients([...recipeIngredients, ingredientFormData])
  }

  function handleChangeRender(value) {
    onHandleChangeRender(value)
  }



  return ( 
    <StyledRecipes>
      <h1>Add Ingredients</h1>

      <div>
    <form>

      <h3>Name</h3>
        <Select
        defaultValue={selectedNameOption}
        onChange={option => handleSelectNameOption(option)}
        options={pantryItemNameOptions}
        placeholder="Name"
        />
      <br />

      <h2>Units</h2>
      <h2>{selectedUnit}</h2>
      <br />

      <h3>Quantity</h3>
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={ingredientFormData.quantity}
        onChange={handleIngredientChange}
        />
        <br />
        <br />

      </form>
      <br />
    </div>
    <div>
        <button onClick={e => handleAddIngredient(ingredientFormData)}>Add to Recipe</button>
      </div>
      <br />
      <div>
        <button onClick={e => setRenderAddIngredient("instructions")}>Next</button>
      </div>
    </StyledRecipes>
  )
}