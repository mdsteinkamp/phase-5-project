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

	useEffect(() => {
			function CheckAvailableRecipes() {
				let resultsArray = []
				const results = new Set()
					let unmakeableRecipes = new Set()
					if (!recipes, !user) {
						return
					} else {
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
				}
				setMakeableRecipes(resultsArray)
		}
		CheckAvailableRecipes()
	}, [recipes])
	console.log(makeableRecipes)

	if (makeableRecipes) return (
					<StyledUserPantry>
									<h1>You can make the below recipes!</h1>
									<ul>{makeableRecipes.map((recipe, index) => (
										<div key={recipe.id}>
											<NavbarNavLink to={`/recipes/${recipe.id}`}>{index + 1}. {recipe.name}</NavbarNavLink>
										</div>
									))}</ul>

					</StyledUserPantry>
	)
}