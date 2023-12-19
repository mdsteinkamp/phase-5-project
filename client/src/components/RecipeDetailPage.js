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
        <ul></ul>
      </div>
    </StyledRecipes>
  )
}