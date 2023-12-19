import { useState, useContext } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { Link } from "react-router-dom"
import Select from 'react-select'
import { Routes, Route } from "react-router-dom"

export default function AddddRecipeInstructions({ recipe, onhandleSubmitRecipe, errors }) {
  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    instructions: "",
  })
  // const [addRecipe, setAddRecipe] = useState(false)

  function handleRecipeChange(e) {
    const name = e.target.name
    const value = e.target.value
    setRecipeFormData({
      ...recipeFormData,
      name: recipe.name,
      [name]: value
    })
  }

  function handleSubmitRecipe(recipe) {
    onhandleSubmitRecipe(recipe)
    // setAddRecipe(true)
  }

  return (
    <StyledRecipes>
      <h1>Instructions</h1>
      <form>
        <textarea 
          type="text"
          name="instructions"
          placeholder="Instructions"
          value={recipeFormData.instructions}
          onChange={handleRecipeChange}
        />


      </form>
      <br />
      <div>
        <button onClick={e => handleSubmitRecipe(recipeFormData)}>Next</button>
      </div>
      {/* <div>
      {!addRecipe && errors.length === 0 ? null : 

          <h1>Recipe Added!</h1>

      }
      </div> */}
    </StyledRecipes>
  )
}