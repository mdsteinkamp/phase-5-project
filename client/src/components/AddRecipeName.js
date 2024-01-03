import { useState, useContext } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { Link } from "react-router-dom"
import Select from 'react-select'
import { Routes, Route } from "react-router-dom"

export default function AddRecipeName({ onHandleChangeRender }) {
  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    instructions: "",
  })
  const [nameError, setNameError] = useState(false)

  console.log(recipeFormData)

  function handleRecipeChange(e) {
    const name = e.target.name
    const value = e.target.value
    setRecipeFormData({
      ...recipeFormData,
      [name]: value
    })
  }

  function handleChangeRender(value, recipe) {
    if (!recipeFormData.name)  {setNameError(true)} else {onHandleChangeRender(value, recipe)}
  }

  return (
    <StyledRecipes>
      <h1>Create Recipe</h1>
      <h2>Name</h2>
      <form>
        <input 
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipeFormData.name}
          onChange={handleRecipeChange}
        />

      </form>
      <br />
      <div>
        <button onClick={e => handleChangeRender("ingredients", recipeFormData)}>Next</button>
      </div>
      {nameError ? <h2>Name must be present</h2> : null}

    </StyledRecipes>
  )
}