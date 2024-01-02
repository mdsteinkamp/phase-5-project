import { StyledUserPantry } from "./styles/UserPantry.styled"
import { NavbarNavLink } from "./styles/NavbarNavLink.styled"
import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "./UserContext"
import { RecipesContext } from "./RecipesContext"

export default function AvailableRecipesPage() {
  const {recipes} = useContext(RecipesContext)
  const {user} = useContext(UserContext)
	const [makeableRecipes, setMakeableRecipes] = useState(null)
    
  // if (!recipes, !user) return(<h1>Loading data...</h1>)
    // console.log(recipes, user)

    // let arr = []
    // let obj = {
    //     recipes: []
    // }
    // let recipesToSearch = [...recipes]

	useEffect(() => {
		if(recipes) {

			
			function CheckAvailableRecipes() {
				let resultsArray = []
				const results = new Set()
					let unmakeableRecipes = new Set()
					for (const recipe of recipes) {
						for (const ingredient of recipe.ingredients) {
							if (!user.pantry_items.find(i => (i.foodstuff.name === ingredient.foodstuff.name))) {
									unmakeableRecipes.add(recipe.name)
							} else if (user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name && ingredient.quantity > i.quantity)) {
									unmakeableRecipes.add(recipe.name)
							}	if ((user.pantry_items.find(i => i.foodstuff.name === ingredient.foodstuff.name && ingredient.quantity <= i.quantity))) {
									results.add(recipe)
							} 
						}
		
					resultsArray = [...results]
					let unmakeableRecipesArray = [...unmakeableRecipes]
					for (const recipe of unmakeableRecipesArray) {
							resultsArray = resultsArray.filter(r => r.name !== recipe)
					}
				}
				setMakeableRecipes(resultsArray)
			}
			CheckAvailableRecipes()
		}

	}, [recipes])
	console.log(makeableRecipes)

	if (makeableRecipes) return (
					<StyledUserPantry>
									<h1>You can make the below recipes!</h1>
									<ul>{makeableRecipes.map((recipe, index) => (
										<div>
											<NavbarNavLink to={`/recipes/${recipe.id}`} key={recipe.id}>{index + 1}. {recipe.name}</NavbarNavLink>
										</div>
									))}</ul>

					</StyledUserPantry>

	)
}

// const makeableRecipes = user.pantry_items.map(item => {
// 	for (const recipe of recipesToSearch) {
// 		 if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity <= item.quantity)) {
// 			console.log(recipesToSearch)
// 			break
// 		} else if (recipe.ingredients.find(ingredient => ingredient.foodstuff.name !== item.foodstuff.name)) {
// 			console.log("can't make this")
// 			recipesToSearch = recipesToSearch.filter(r => r.name !== recipe.name)
// 		} else if (recipe.ingredients.find(ingredient => (ingredient.foodstuff.name === item.foodstuff.name && ingredient.quantity > item.quantity))) {
// 			console.log(recipe)
// 			console.log(recipe.name, arr)
// 			arr = arr.filter(r => r.name !== recipe.name)
// 			recipesToSearch = recipesToSearch.filter(r => r.name !== recipe.name)
// 			return recipesToSearch
// 		}

// 	} 
// 	return recipes
// })

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