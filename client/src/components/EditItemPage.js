import { useState } from "react"
import { StyledUserPantry } from "./styles/UserPantry.styled"
import { render } from "react-dom"

export default function EditItemPage({ pantryItem, onUpdateItem, renderItemUpdated }) {
  const [itemFormData, setItemFormData] = useState({
    foodstuff_id: pantryItem.foodstuff_id,
    id: pantryItem.id,
    quantity: pantryItem.quantity,
    user_id: pantryItem.user_id
  })

  function handleUpdateItem(e) {
    e.preventDefault()
    onUpdateItem(itemFormData)
  }

  return (
    <StyledUserPantry>
      <h1>Change Item Quantity</h1>
      <div>
        <form onSubmit={handleUpdateItem}>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={itemFormData.quantity}
            onChange={e => {
              setItemFormData({
                ...itemFormData,
                quantity: e.target.value
              })
            }}
          />
          <button>Update</button>
        </form>
        { !renderItemUpdated ? null : <h3>Item Updated</h3>}
      </div>
    </StyledUserPantry>
  )
}