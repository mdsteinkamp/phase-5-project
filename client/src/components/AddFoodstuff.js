import { StyledAddFoodstuff } from "./styles/AddFoodstuff.styled"
import { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom"
import { FoodstuffsContext } from "./FoodstuffsContext"

export default function AddFoodstuff() {
  const {foodstuffs, setFoodstuffs} = useContext(FoodstuffsContext)
  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    category: ""
  })
  const [errors, setErrors] = useState([])
  const {user, setUser} = useContext(UserContext)
  console.log(foodstuffs)

  const navigate = useNavigate()

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/foodstuffs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((foodstuff) => {
          const newFoodstuffs = [...foodstuffs, foodstuff]
          setFoodstuffs(newFoodstuffs)
          console.log(foodstuffs)
        })
        navigate("/foodstuffs/new")
        setErrors([])
      } else {
        resp.json().then(e => {
          setErrors(e.errors)
          console.log(errors)
        })
      }
    });
  }

  return (
    <StyledAddFoodstuff>
      <div>
        <h1>Add Food Item</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <h3>Units</h3>
            <input
              type="text"
              name="unit"
              placeholder="Unit"
              value={formData.unit}
              onChange={handleChange}
            />
            <br />
            <h3>Category</h3>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
            <br />
            <div>
              <button>Add Item</button>
            </div>
          </form>
        </div>
        {errors.length > 0 &&
            <ul>{errors.map(e => (
              <ul key={e}>
                <h3>{e}</h3>
              </ul>))}
            </ul>
          }
    </StyledAddFoodstuff>
  )
}