import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"

import AddRecipeIngredients from "./AddRecipeIngredients"
import AddRecipeName from "./AddRecipeName"
import AddRecipeInstructions from "./AddRecipeInstructions"


export default function AddRecipe() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  const [selectedNameOption, setSelectedNameOption] = useState(null)
  const [selectedUnit, setSelectedUnit] = useState("")
  const [recipe, setRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])


  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    instructions: "",
  })
  const [ingredientFormData, setIngredientFormData] = useState({
    quantity: "",
    user_id: "",
    foodstuff_id: "",
  })
  const [renderAddIngredient, setRenderAddIngredient] = useState("name")

  if (!foodstuffs, !user) return <h1>Loading...</h1>

  function handleChangeNameRender(value, recipe) {
    setRenderAddIngredient(value)
    setRecipe(recipe)
  }

  function handleIngredientsChangeRender(value, ingredients) {
    setRenderAddIngredient(value)
    setIngredients(ingredients)
  }

  function handleChangeInstructionsRender(value, recipe) {
    setRecipe(recipe)
  }

  function handleSubmitRecipe(recipe) {
    console.log(recipe, ingredients)
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((foodstuff) => {
          const newRecipes = [...foodstuffs, foodstuff]
          setFoodstuffs(newFoodstuffs)
        })
        setFormData({
          name: "",
          unit: "",
          category: ""
        })
        setErrors([])
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    });

  }

  {if (renderAddIngredient === "name") {
    return <AddRecipeName onHandleChangeRender={handleChangeNameRender} />
  }

    else if (renderAddIngredient === "ingredients") {
    return <AddRecipeIngredients onHandleChangeRender={handleIngredientsChangeRender} />
    }

    else if (renderAddIngredient === "instructions") {
      return <AddRecipeInstructions recipe={recipe} onhandleSubmitRecipe={handleSubmitRecipe}/>
    }
  }

}
  