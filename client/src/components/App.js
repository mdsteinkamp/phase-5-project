import { useState, useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext"
import '../App.css'
import Header from "./Header"
import Home from "./Home"
import { StyledAppContainer } from "./styles/App.Container.styled"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import UserPantry from "./UserPantry"
import AddPantryItem from "./AddPantryItem"
import AddFoodstuff from "./AddFoodstuff"
import PantryItemDetailPage from "./PantryItemDetailPage"
import RecipesPage from "./RecipesPage"
import AddRecipe from "./AddRecipe"


export default function App() {
  const [count, setCount] = useState(0)
  const {user, setUser} = useContext(UserContext)

  return (
    <StyledAppContainer>
      <Header />
      {user ? <NavBar /> : null }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pantry_items" element={<UserPantry />} />
        <Route path="/pantry_items/:id" element={<PantryItemDetailPage />} />
        <Route path="/pantry_items/new" element={<AddPantryItem />} />
        <Route path="/foodstuffs/new" element={<AddFoodstuff />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/new" element={<AddRecipe />} />

      </Routes>
      </StyledAppContainer>
  );
}