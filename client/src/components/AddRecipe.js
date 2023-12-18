import { useState, useContext } from "react"
import { StyledRecipes } from "./styles/StyledRecipes"
import { UserContext } from "./UserContext"
import { FoodstuffsContext } from "./FoodstuffsContext"
import { Link } from "react-router-dom"
import Select from 'react-select'
import { Routes, Route } from "react-router-dom"

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


  // function handleRecipeChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setRecipeFormData({
  //     ...recipeFormData,
  //     [name]: value
  //   })
  // }

  // function handleIngredientChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setIngredientFormData({
  //     ...ingredientFormData,
  //     [name]: value
  //   })
  // }

  // const pantryItemNameOptions = foodstuffs.map(foodstuff => ({label: foodstuff.name, value: foodstuff.id, unit: foodstuff.unit}))

  // function handleSelectNameOption(option) {
  //   setSelectedNameOption(option)
  //   setSelectedUnit(option.unit)
  //   setIngredientFormData({...ingredientFormData,
  //     user_id: user.id,
  //     foodstuff_id: option.value})
  // }

  // function handleAddIngredient(e) {
  //   recipeIngredients = [...recipeIngredients, ingredientFormData]
  // }

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

  }

  console.log(recipe, ingredients)



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
  
  
  // {
  //     return ( 
  //       <StyledRecipes>
  //         <h1>Add Ingredients</h1>

  //         <div>
  //       <form>

  //         <h3>Name</h3>
  //           <Select
  //           defaultValue={selectedNameOption}
  //           onChange={option => handleSelectNameOption(option)}
  //           options={pantryItemNameOptions}
  //           placeholder="Name"
  //           />
  //         <br />

  //         <h2>Units</h2>
  //         <h2>{selectedUnit}</h2>
  //         <br />

  //         <h3>Quantity</h3>
  //         <input
  //           type="number"
  //           name="quantity"
  //           placeholder="Quantity"
  //           value={ingredientFormData.quantity}
  //           onChange={handleIngredientChange}
  //           />
  //           <br />
  //           <br />
  //           <div>
  //             <button onClick={e => handleAddIngredient}>Add Item</button>
  //           </div>
  //         </form>
  //         <br />
  //       </div>
  //       <div>
  //           <button onClick={e => setRenderAddIngredient("instructions")}>Add to Recipe</button>
  //         </div>
  //         <br />
  //         <div>
  //           <button onClick={e => setRenderAddIngredient("instructions")}>Next</button>
  //         </div>
  //       </StyledRecipes>
  //     )}
    

  // }

  }
  