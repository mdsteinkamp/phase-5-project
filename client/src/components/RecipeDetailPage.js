import { useContext } from "react"
import { useParams } from "react-router"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"
import { StyledRecipeDetails } from "./styles/RecipeDetail.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"



export default function RecipeDetailPage() {
  const {recipes} = useContext(RecipesContext)
  const {user, setUser} = useContext(UserContext)
  const {id} = useParams()

  if (!recipes, !user) return(<h1>Loading data...</h1>)

  const recipe = recipes.find(recipe => recipe.id === parseInt(id))

  console.log("pantry items:", user.pantry_items, "recipe ingreds:", recipe.ingredients)

  function handleCheckIngredients() {
    const results = {}
    for (const ingredient of recipe.ingredients) {
      console.log(ingredient)
      if (user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)) {
        const pantry_ingredient = user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)
        results[`${pantry_ingredient.foodstuff.name}`] = pantry_ingredient.quantity - ingredient.quantity
      }
    }
    console.log(results)
  }


  return (
    <StyledRecipeDetails>
      <h1>{recipe.name}</h1>
      <div className="recipe-details">
        <h2>Ingredients</h2>
        <ul>{recipe.ingredients.map((ingredient, index) => {
          return <p key={ingredient.id}>{index + 1}: {ingredient.foodstuff.name}: {ingredient.quantity} {ingredient.foodstuff.unit}</p>
        })}</ul>
      </div>
      <div>
        <h2>Instructions</h2>
        <h2 className="display-linebreak">{recipe.instructions}</h2>
      </div>
      <div>
        <button onClick={handleCheckIngredients}>Can I Make This?</button>
      </div>
    </StyledRecipeDetails>
  )
}