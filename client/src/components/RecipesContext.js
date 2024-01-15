import { useState, useEffect, useContext, createContext } from "react"
import { UserContext } from "./UserContext"

const RecipesContext = createContext()

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(null)
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetch('/recipes').then((resp) => {
      if (resp.ok) {
        resp.json().then((recipes => setRecipes(recipes)))
      }
    })
  }, [user])

  return <RecipesContext.Provider value={{ recipes, setRecipes }}>{children}</RecipesContext.Provider>
}

export { RecipesContext, RecipesProvider }