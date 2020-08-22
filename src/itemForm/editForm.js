import React, { useState } from "react"

const EditForm = ({ updateForm, id, onFormClose,
  buildingName, hallName,
  priceValue, capacityValue }) => {

  const [building, setBuilding] = useState('')
  const [hall, setHall] = useState('')
  const [price, setPrice] = useState(0)
  const [capacity, setCapacity] = useState(0)

  const handleBuildingChange = (e) => {
    e.preventDefault()
    setBuilding(e.target.value)
  }

  const handleHallChange = (e) => {
    e.preventDefault()
    setHall(e.target.value)
  }

  const handlePriceChange = (e) => {
    e.preventDefault()
    setPrice(e.target.value)
  }

  const handleCapacityChange = (e) => {
    e.preventDefault()
    setCapacity(e.target.value)
  }

  const handleFormUpdate = (e) => {
    e.preventDefault()
    updateForm(id, {
      building,
      hall,
      price,
      capacity
    })
    onFormClose();
  }

  return (
    <form onSubmit={handleFormUpdate}>
      Building:<input type="text" onChange={handleBuildingChange} value={building} /><br />
      Hall:<input type="text" onChange={handleHallChange} value={hall} /><br />
      price:<input type="number" onChange={handlePriceChange} value={price} /><br />
      Capacity:<input type="number" onChange={handleCapacityChange} value={capacity} /><br />
      <input type="submit" value="update" />
    </form>
  )
}

export default EditForm;