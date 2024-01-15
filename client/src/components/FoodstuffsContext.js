import { useState, useEffect, useContext, createContext } from "react"
import { UserContext } from "./UserContext"

const FoodstuffsContext = createContext()

function FoodstuffsProvider({ children }) {
  const [foodstuffs, setFoodstuffs] = useState(null)
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetch('/foodstuffs').then((resp) => {
      if (resp.ok) {
        resp.json().then((foodstuffs => setFoodstuffs(foodstuffs)))
      }
    })
  }, [user])

  return <FoodstuffsContext.Provider value={{ foodstuffs, setFoodstuffs }}>{children}</FoodstuffsContext.Provider>
}

export { FoodstuffsContext, FoodstuffsProvider }