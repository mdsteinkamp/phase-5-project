import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { RecipesContext } from "./RecipesContext"
import { useNavigate } from "react-router"
import AddRecipeIngredients from "./AddRecipeIngredients"
import AddRecipeName from "./AddRecipeName"
import AddRecipeInstructions from "./AddRecipeInstructions"


export default function AddRecipe() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const {user, setUser} = useContext(UserContext)
  const {recipes, setRecipes} = useContext(RecipesContext)
  const [recipe, setRecipe] = useState({})
  const [newRecipe, setNewRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [errors, setErrors] = useState([])
  const [finalRecipe, setFinalRecipe] = useState({})
  const [newIngredients, setNewIngredients] = useState([])
  const [addRecipe, setAddRecipe] = useState(false)


  const navigate = useNavigate()



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

  function handleSubmitRecipe(recipe) {
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(newRecipe => {
          const newRecipes = [...recipes, newRecipe]
          setRecipes(newRecipes)
          setNewRecipe(newRecipe)
          handleSubmitIngredients(ingredients, newRecipe)

        })
        setRecipeFormData({
          name: "",
          instructions: "",
        })
        setErrors([])
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }})

  }

  function handleSubmitIngredients(ingredients, newRecipe) {
    Promise.all(ingredients.map(ingredient => {
      const updatedIngredient = {...ingredient, recipe_id: newRecipe.id}
      return fetch("/ingredients", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(updatedIngredient)
      })
    }))
    .then(results => {
      Promise.all(results.map((ingredient) => {
        return ingredient.json()
      }))
      .then(ingredients => {
        const updatedRecipe = {...newRecipe, ingredients: ingredients}
        console.log(updatedRecipe)
        setRecipes([...recipes, updatedRecipe])
        
        setAddRecipe(true)
      })
      .catch(e => console.log(e))
    })
  }

  {if (renderAddIngredient === "name") {
    return (<AddRecipeName onHandleChangeRender={handleChangeNameRender} />)
  }

    else if (renderAddIngredient === "ingredients") {
    return <AddRecipeIngredients onHandleChangeRender={handleIngredientsChangeRender} />
    }

    else if (renderAddIngredient === "instructions") {
      return (
        <>
          <AddRecipeInstructions recipe={recipe} onhandleSubmitRecipe={handleSubmitRecipe} errors={errors}/>
          {!addRecipe ? null : 
            <div>
              <h1 style={{color:"#EF6351"}}>Recipe Added!</h1>
            </div>
          }
          {errors.length > 0 &&
            <ul>{errors.map(e => (
              <ul key={e}>
                <h2 style={{color: "white"}}>{e}</h2>
              </ul>))}
            </ul>
          }
        </>
      )
    }
  }

}
  