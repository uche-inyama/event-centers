import React, { useState } from 'react';


const ItemForm = ({ FormSubmit }) => {
  let [building, setBuilding] = useState('');
  let [hall, setHall] = useState('');
  let [price, setPrice] = useState('');
  let [capacity, setCapacity] = useState('');


  const handleBuildingChange = (e) => {
    setBuilding(e.target.value)
  }
  const handleHallChange = (e) => {
    setHall(e.target.value)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }
  const handleCapacityChange = (e) => {
    setCapacity(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    FormSubmit({
      building,
      hall,
      price,
      capacity
    })
    setBuilding('');
    setHall('');
    setPrice('');
    setCapacity('');

  }

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Building Name</span><input type="text" onChange={handleBuildingChange} value={building} /><br />
      <span>Hall Name</span><input type="text" onChange={handleHallChange} value={hall} /><br />
      <span>Price</span><input type="number" onChange={handlePriceChange} value={price} /><br />
      <span>Capacity</span><input type="number" onChange={handleCapacityChange} value={capacity} /><br />
      <input type="submit" />
    </form>
  )
}

export default ItemForm;