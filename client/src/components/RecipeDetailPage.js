import { useState, useContext } from "react"
import { useParams } from "react-router"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"
import { StyledRecipeDetails } from "./styles/RecipeDetail.styled"
import RenderMissingIngredients from "./RenderMissingIngredients"

export default function RecipeDetailPage() {
  const {recipes} = useContext(RecipesContext)
  const {user, setUser} = useContext(UserContext)
  const {id} = useParams()
  const [ingredientCheckResults, setIngredientCheckResults] = useState(null)
  const [missingIngredients, setMissingIngredients] = useState(null)
  const [renderIngredients, setRenderIngredients] = useState(false)
  const [renderPantryUpdated, setRenderPantryUpdated] = useState(false)

  if (!recipes, !user) return(<h1>Loading data...</h1>)

  const recipe = recipes.find(recipe => recipe.id === parseInt(id))

  function handleCheckIngredients() {
    const results = {}
    for (const ingredient of recipe.ingredients) {
      if (!(user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name))) {
        results[`${ingredient.foodstuff.name}`] = [-(ingredient.quantity), ingredient.foodstuff.unit]
      } 
      else if (user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)) {
        const pantry_ingredient = user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name)
        results[`${pantry_ingredient.foodstuff.name}`] = [pantry_ingredient.quantity - ingredient.quantity, ingredient.foodstuff.unit]
      }
    }
    setIngredientCheckResults(results)
    const resultsArray = Object.entries(results)
    const negativesArray = resultsArray.filter(item => item[1][0] < 0)
    const renderNegatives = negativesArray.length > 0 ? negativesArray : null
    setMissingIngredients(renderNegatives)
    setRenderIngredients(true)
  }

  function handleUpdateUserPantry() {
    const pantryItemsToUpdate = recipe.ingredients.map(ingredient => user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name))
    console.log(pantryItemsToUpdate)
    const updatedItems = pantryItemsToUpdate.map(item => ({...item, quantity: item.quantity - recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name).quantity
    }))
    console.log(updatedItems)
    // console.log(updatedItems)

    // Promise.all(pantryItemsToUpdate.map(item => {
    //   const updatedItem = {
    //     ...item,
    //     quantity: item.quantity - recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name).quantity
    //   }
    //   return fetch(`/pantry_items/${item.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(updatedItem)
    //   })
    // }))
    // .then(results => {
    //   Promise.all(results.map(pantryItem => {
    //     return pantryItem.json()
    //   }))
    //   .then(pantryItems => {
    //     const updatedUserPantryItems = [...user.pantry_items].map(item => pantryItems.find(i => i.id === item.id) || item)
    //     const updatedUser = {...user, pantry_items: updatedUserPantryItems}
    //     setUser(updatedUser)
    //     setRenderPantryUpdated(true)
    //   })
    //   .catch(e => console.log(e))
    // })
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
      <br />
      
      {renderIngredients ? <RenderMissingIngredients missingIngredients={missingIngredients} onUpdateUserPantry={handleUpdateUserPantry} renderPantryUpdated={renderPantryUpdated} /> : null }

    </StyledRecipeDetails>
  )
}