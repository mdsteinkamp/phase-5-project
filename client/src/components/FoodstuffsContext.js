import { useState, useEffect, createContext } from "react"

const FoodstuffsContext = createContext()

function FoodstuffsProvider({ children }) {
  const [foodstuffs, setFoodstuffs] = useState(null)

  useEffect(() => {
    fetch('/foodstuffs').then((resp) => {
      if (resp.ok) {
        resp.json().then((foodstuffs => setFoodstuffs(foodstuffs)))
      }
    })
  }, [])



  return <FoodstuffsContext.Provider value={{ foodstuffs, setFoodstuffs }}>{children}</FoodstuffsContext.Provider>
}

export { FoodstuffsContext, FoodstuffsProvider }