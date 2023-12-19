import { useContext } from "react"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { StyledRecipes } from "./styles/StyledRecipes"
import { RecipesContext } from "./RecipesContext"


export default function RecipesPage() {
  const {recipes, setRecipes} = useContext(RecipesContext)

  if (!recipes) return (<h1>Loading data...</h1>)

  console.log(recipes)


  return (
    <StyledRecipes>
      <h1>Recipes</h1>
      <div>
        <div>
          <PantryNavlink to="/recipes/new" className="create-recipe-button">Add Recipe</PantryNavlink>
        </div>
        <div>
            <h3>Item</h3>
            <ul>{recipes.map(recipe => (
              <PantryNavlink to={`/recipes/${recipe.id}`} className="navlink" key={recipe.id}>{recipe.name}</PantryNavlink>
            ))}
            </ul>
          </div>
      </div>
    </StyledRecipes>
  )
}