import { StyledUserPantry } from "./styles/UserPantry.styled"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"

export default function AvailableRecipesPage() {
  const {recipes} = useContext(RecipesContext)
  const {user} = useContext(UserContext)
    
  if (!recipes, !user) return(<h1>Loading data...</h1>)
	console.log(recipes, user)

	const makeableRecipes = user.pantry_items.map(item => {
		const arr = []
		for (const recipe of recipes) {
			if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity <= item.quantity)) { arr.push(recipe.name)}

		}

		return arr
		
	})

	console.log(makeableRecipes)


	return (
			<StyledUserPantry>
					<h1>You can make the below recipes!</h1>
			</StyledUserPantry>

	)
}