import { useState, useContext } from "react"
import { useParams } from "react-router"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"
import { StyledRecipeDetails } from "./styles/RecipeDetail.styled"
import { PantryNavlink } from "./styles/PantryNavLink.styled"
import { render } from "react-dom"



export default function RecipeDetailPage() {
  const {recipes} = useContext(RecipesContext)
  const {user, setUser} = useContext(UserContext)
  const {id} = useParams()
  const [ingredientCheckResults, setIngredientCheckResults] = useState(null)
  const [missingIngredients, setMissingIngredients] = useState(null)
  const [renderIngredients, setRenderIngredients] = useState(null)

  if (!recipes, !user) return(<h1>Loading data...</h1>)

  const recipe = recipes.find(recipe => recipe.id === parseInt(id))

  console.log("pantry items:", user.pantry_items, "recipe ingreds:", recipe.ingredients)

  function handleCheckIngredients() {
    const results = {}
    for (const ingredient of recipe.ingredients) {
      if (user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name) === undefined) {
        results[`${ingredient.foodstuff.name}`] = [-(ingredient.quantity), ingredient.foodstuff.unit]
      } else if (user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)) {
        const pantry_ingredient = user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)
        results[`${pantry_ingredient.foodstuff.name}`] = [pantry_ingredient.quantity - ingredient.quantity, ingredient.foodstuff.unit]
      }
    }
    console.log(results)
    setIngredientCheckResults(results)
    const resultsArray = Object.entries(results)
    const negativesArray = resultsArray.filter(item => item[1][0] < 0)
    const renderNegatives = negativesArray.length > 0 ? negativesArray : null


    setMissingIngredients(renderNegatives)
  }
  console.log(ingredientCheckResults)
  console.log(missingIngredients)


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
      {renderIngredients ? <h2>You can make it!</h2> : null}

      {switch renderIngredients {
        case null:
          null
      }
        :
        <div>
          <h2>Missing Ingredients</h2>
        <ul>{missingIngredients.map(ingredient => (
          <h4 key={ingredient[0]}>
            <p>{ingredient[0]} {Math.abs(ingredient[1][0])} {ingredient[1][1]}</p>
          </h4>
        ))}
      </ul>
      </div>
      }
    </StyledRecipeDetails>
  )
}