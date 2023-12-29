import { StyledUserPantry } from "./styles/UserPantry.styled"
import { useContext } from "react"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"

export default function AvailableRecipesPage() {
  const {recipes} = useContext(RecipesContext)
  const {user} = useContext(UserContext)
    
  if (!recipes, !user) return(<h1>Loading data...</h1>)
	console.log(recipes, user)

	let arr = []
	let obj = {
		recipes: []
	}
	let recipesToSearch = [...recipes]
	const makeableRecipes = user.pantry_items.map(item => {
		for (const recipe of recipesToSearch) {
			if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity <= item.quantity)) {
				break
			} else if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity > item.quantity)) {
				console.log(recipe)
				console.log(recipe.name, arr)
				arr = arr.filter(r => r.name !== recipe.name)
				recipesToSearch = recipesToSearch.filter(r => r.name !== recipe.name)
				return recipesToSearch
			}

		} 
		return recipes
		
	})

	console.log(makeableRecipes)


	return (
			<StyledUserPantry>
					<h1>You can make the below recipes!</h1>
			</StyledUserPantry>

	)
}

// const makeableRecipes = user.pantry_items.map(item => {
// 	const arr = []
// 	for (const recipe of recipes) {
// 		if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity <= item.quantity)) { arr.push(recipe.name, item.foodstuff.name)}

// 	}

// 	return arr
	
// })

// const set = new Set()
// const makeableRecipes = user.pantry_items.map(item => {
// 	for (const recipe of recipes) {
// 		if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity <= item.quantity)) { set.add(recipe)}

// 	}

// 	return set
	
// })