import React from "react";

const Item = ({ id, onEditClick, event_center, onDeleteClick }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteClick(id);
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    onEditClick();
  }
  return (
    <>
      <li>
        <h4>{event_center.building}</h4>
        <h4>{event_center.hall}</h4>
        <h4>{event_center.price}</h4>
        <h4>{event_center.capacity}</h4>
        <span onClick={handleEditClick}>Edit</span> <span onClick={handleDelete}>delete</span>
      </li>
    </>
  )
}

export default Item;
