import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { StyledRecipes } from "./styles/StyledRecipes"

export default function RecipesPage() {


  return (
    <StyledRecipes>
      <h1>Recipes</h1>
      <div>
        <PantryNavlink to="/recipes/new">Add Recipe</PantryNavlink>
      </div>
    </StyledRecipes>
  )
}