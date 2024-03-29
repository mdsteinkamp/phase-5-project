import { useState } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"

export default function AddddRecipeInstructions({ recipe, onhandleSubmitRecipe }) {
  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    instructions: "",
  })
  const [instructionsError, setInstructionsError] = useState(false)

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
    if (recipeFormData.instructions === "") {
      setInstructionsError(true)
      return
    } else {
      onhandleSubmitRecipe(recipe)
    }
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
        <button onClick={e => handleSubmitRecipe(recipeFormData)}>Add Recipe!</button>
      </div>
      {instructionsError ? <h2>How do we make this thing? 🤔</h2> : null}

    </StyledRecipes>
  )
}