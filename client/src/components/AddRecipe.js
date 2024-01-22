import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { RecipesContext } from "./RecipesContext"
import AddRecipeIngredients from "./AddRecipeIngredients"
import AddRecipeName from "./AddRecipeName"
import AddRecipeInstructions from "./AddRecipeInstructions"


export default function AddRecipe() {
  const {foodstuffs} = useContext(FoodstuffsContext)
  const {user} = useContext(UserContext)
  const {recipes, setRecipes} = useContext(RecipesContext)
  const [recipe, setRecipe] = useState({})
  const [newRecipe, setNewRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [errors, setErrors] = useState([])
  const [addRecipe, setAddRecipe] = useState(false)

  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    instructions: "",
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
      const updatedNewRecipe = {...recipe, ingredients: ingredients}
      fetch("/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNewRecipe),
      })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(newRecipe => {
            console.log(newRecipe)
            // const newRecipes = [...recipes, newRecipe]
            setRecipes([...recipes, newRecipe])
            console.log(recipes)
            // setNewRecipe(newRecipe)
            setAddRecipe(true)
            // handleSubmitIngredients(ingredients, newRecipe)
          })
          setRecipeFormData({
            name: "",
            instructions: "",
          })
          setErrors([])
        } else {  
          resp.json().then(e => {
            console.log(e.errors)
            setErrors(e.errors)
            return
          })
        }})
      }

    function handleSubmitIngredients(ingredients, newRecipe) {
      console.log(ingredients, newRecipe.id)
      const updatedIngredients = ingredients.map(i => ({...i, recipe_id: newRecipe.id}))
      console.log(updatedIngredients)
      // Promise.all(ingredients.map(ingredient => {
        // const updatedIngredient = {...ingredient, recipe_id: newRecipe.id}
        // fetch("/ingredients", {
        //   method: "POST", 
        //   headers: {
        //     "Content-Type": "application/json", 
        //   },
        //   body: JSON.stringify(updatedIngredients),
        // })
        // .then((resp) => {
        //   if (resp.ok) {
        //     resp.json().then((ingredients) => {
        //       const updatedRecipe = {...newRecipe, ingredients: ingredients}
        //       setRecipes([...recipes, updatedRecipe])
        //       setAddRecipe(true)
        //     })
        //   } else {
        //     resp.json().then (e => {
        //       setErrors(e.errors)
        //       console.log(errors)
        //     })
        //   }
        // })
      // }
  // console.log(results)
  // Promise.all(results.map(i => i.json()))
  // .then(ingredients => {
  //   const updatedRecipe = {...newRecipe, ingredients: ingredients}
  //   setRecipes([...recipes, updatedRecipe])
  //   setAddRecipe(true)
  // })
  // const end = performance.now()
  // console.log(`Execution time: ${end - start} ms`)
  }

  // function handleIngredientState(ingredients, newRecipe) {
  //   const updatedRecipe = {...newRecipe, ingredients: ingredients}
  //   console.log(updatedRecipe)
  //   const newRecipes = [...recipes, updatedRecipe]
  //   setRecipes(newRecipes)
  //   console.log(recipes)
  //   setAddRecipe(true) 
  // }

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
                <h3 style={{color: "white"}}>{e}</h3>
              </ul>))}
            </ul>
          }
        </>
      )
    }
  }

}
  