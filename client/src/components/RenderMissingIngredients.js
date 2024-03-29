import { StyledRecipeDetails } from "./styles/RecipeDetail.styled"

export default function RenderMissingIngredients({ missingIngredients, onUpdateUserPantry, renderPantryUpdated }) {

  function handleUpdateUserPantry() {
    onUpdateUserPantry()
  }

  if (!missingIngredients) return (
    <StyledRecipeDetails>
      <h2>Yes!</h2>
      <div>
      <button onClick={handleUpdateUserPantry}>Make & Update Pantry</button>
      { renderPantryUpdated ? <h2>Your Pantry Has Been Updated!</h2> : null }
      </div>
    </StyledRecipeDetails>
    )

  return (
    <StyledRecipeDetails>
      <h2>Missing Ingredients</h2>
      <ul>{missingIngredients.map(ingredient => (
      <h4 key={ingredient[0]}>
        <p>{ingredient[0]} {Math.abs(ingredient[1][0])} {ingredient[1][1]}</p>
      </h4>
        ))}
      </ul>
    </StyledRecipeDetails>
  )
  
}