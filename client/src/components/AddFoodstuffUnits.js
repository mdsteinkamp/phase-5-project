import { useEffect, useState } from 'react'
import Select from 'react-select'


export default function AddFoodstuffUnits({ availableUnits }) {
  const [selectedUnitOption, setSelectedUnitOption] = useState([])
  const [selectedUnit, setSelectedUnit] = useState("")

  function handleSelectUnitOption(option) {
    console.log(option.value)
  }

  useEffect(() => {
    if (selectedUnitOption.length > 0) {setSelectedUnit(availableUnits[1])}
  }, [availableUnits])


  console.log("in addunits comp:", availableUnits)
  return (
    <div>
    <h3>Units</h3>
            <Select
              value={selectedUnitOption}
              onChange={option => handleSelectUnitOption(option)}
              options={selectedUnitOption}
              placeholder="Category"
            />
            <br />
    </div>
    
  )
}