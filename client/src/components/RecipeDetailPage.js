import { useContext } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import { useParams } from "react-router"
import { RecipesContext } from "./RecipesContext"


export default function RecipeDetailPage() {
  const {recipes, setRecipes} = useContext(RecipesContext)
  const {id} = useParams()

  if (!recipes) return(<h1>Loading data...</h1>)

  const recipe = recipes.find(recipe => recipe.id === parseInt(id))
  console.log(recipe)


  return (
    <StyledRecipes>
      <h1>{recipe.name}</h1>
      <div>
        <h2>Ingredients</h2>
        <ul>{recipe.ingredients.map((ingredient, index) => {
          return <p key={ingredient.id}>{index + 1}: {ingredient.foodstuff.name}: {ingredient.quantity} {ingredient.foodstuff.unit}</p>
        })}</ul>
      </div>
      <div>
        <h2>Instructions</h2>
        <h2 className="display-linebreak">{recipe.instructions}</h2>
      </div>
    </StyledRecipes>
  )
}