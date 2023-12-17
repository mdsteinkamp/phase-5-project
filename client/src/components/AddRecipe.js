import { useState } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import AddRecipeIngredients from "./AddRecipeIngredients"


export default function AddRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
  })
  const [renderAddIngredient, setRenderAddIngredient] = useState("name")

  function handleChange() {
    console.log(formData)
  }

  function handleRenderAddIngredients() {
    <AddRecipeIngredients />
  }



  {if (renderAddIngredient === "name") {
    return (
      <StyledRecipes>
        <h1>Create Recipe</h1>
        <h2>Name</h2>
        <form>
          <input 
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={formData.name}
            onChange={handleChange}
          />


        </form>
        <div>
          <button onClick={e => setRenderAddIngredient("ingredients")}>Next</button>
        </div>
      </StyledRecipes>
    )}

  else if (renderAddIngredient === "ingredients") {
      return ( 
        <StyledRecipes>
          <h1>Add Ingredients</h1>
          <div>
            <button onClick={e => setRenderAddIngredient("ingredients")}>Next</button>
          </div>
        </StyledRecipes>
      )}
    

  }


  
}