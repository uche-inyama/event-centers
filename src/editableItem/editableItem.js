import React, { useState } from 'react';
import ItemForm from '../itemForm/itemform';
import ConnectedEditForm from '../container/connectedEditForm'
import Item from '../item/item';

const EditableItem = ({ event_center, id, onEventCenterDelete }) => {
  let [editFormOpen, setEditFormOpen] = useState(false);
  // console.log(event_center)
  // console.log(id)

  const closeForm = () => {
    setEditFormOpen(false);
  }

  const openForm = () => {
    setEditFormOpen(true);
  }

  const handleEditClick = () => {
    openForm();
  }

  const handleFormClose = () => {
    closeForm();
  }

  const handleFormSubmit = (data) => {
    closeForm();
  }

  return (
    (editFormOpen) ?
      <ConnectedEditForm
        onFormClose={handleFormClose}
        id={id}
        buildingName={event_center.building}
        hallName={event_center.hall}
        priceValue={event_center.price}
        capacityValue={event_center.capacity}
      /> :
      <Item
        id={id}
        onEditClick={handleEditClick}
        event_center={event_center}
        onDeleteClick={onEventCenterDelete}
      />
  )
}

export default EditableItem;