import { StyledRecipeDetails } from "./styles/RecipeDetail.styled"

export default function RenderMissingIngredients({ ingredients }) {
  console.log(ingredients)


  if (!ingredients) return (<h2>Yes!</h2>)

  return (
    <StyledRecipeDetails>
      <h2>Missing Ingredients</h2>
      <ul>{ingredients.map(ingredient => (
      <h4 key={ingredient[0]}>
        <p>{ingredient[0]} {Math.abs(ingredient[1][0])} {ingredient[1][1]}</p>
      </h4>
        ))}
      </ul>
    </StyledRecipeDetails>
  )
  
}