import React from 'react';
import { Link } from 'react-router-dom'

const centerCard = ({ center, deleteCenter }) => {
  return (
    <div>
      <div className="image">
      </div>
      <div className="content">
        <div className="header">{center.building}</div>
      </div>
      <div className="extra content">
        <div className="two buttons">
          <Link to={`/center/${center.id}`} className="basic button green">Edit</Link>
          <div className="basic button red" onClick={() => deleteCenter(center.id)}>Delete</div>
        </div>
      </div>
    </div>
  );
}

export default centerCard