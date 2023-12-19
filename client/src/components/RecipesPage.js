import { useContext } from "react"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { StyledRecipes } from "./styles/StyledRecipes"
import { RecipesContext } from "./RecipesContext"


export default function RecipesPage() {
  const {recipes, setRecipes} = useContext(RecipesContext)

  console.log(recipes)


  return (
    <StyledRecipes>
      <h1>Recipes</h1>
      <div>
        <PantryNavlink to="/recipes/new" className="create-recipe-button">Add Recipe</PantryNavlink>
      </div>
    </StyledRecipes>
  )
}