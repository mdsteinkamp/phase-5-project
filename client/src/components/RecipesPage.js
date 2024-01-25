import { useContext } from "react"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { StyledRecipes } from "./styles/StyledRecipes"
import { RecipesContext } from "./RecipesContext"


export default function RecipesPage() {
  const {recipes} = useContext(RecipesContext)
  console.log(recipes)

  if (!recipes) return (<h1>Loading data...</h1>)

  return (
    <StyledRecipes>
      <h1>Recipes</h1>
      <div id="buttons-container">
        <div>
          <PantryNavlink to="/recipes/new" className="create-recipe-button">Add Recipe</PantryNavlink>
        </div>
        <div  id="all-recipes-container">
            <h3>All Recipes</h3>
            <ul>{recipes.map(recipe => (
              <PantryNavlink to={`/recipes/${recipe.id}`} className="navlink" key={recipe.id}>{recipe.name}</PantryNavlink>
            ))}
            </ul>
          </div>
      </div>
    </StyledRecipes>
  )
}