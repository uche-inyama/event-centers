import React, { useEffect } from "react";
import EditableItem from '../editableItem/editableItem';

// const api_url = `http://localhost:3002/api/v1/centers`

const ItemList = ({ centers, UpdateFormSubmit, onDelete, requestCenters }) => {
  useEffect(() => {
    requestCenters();
  }, []);
  return (
    <div className="event_centers">
      <ul>
        {centers.map((center, id) => (
          <EditableItem
            id={id}
            key={id}
            event_center={center}
            onEventCenterDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default ItemList;
