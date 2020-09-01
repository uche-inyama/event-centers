import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"

const centerCard = ({ center, deleteCenter }) => {
  const { building, id } = center

  return (
    <div>
      <div className="image">
      </div>
      <div className="content">
        <div className="header">{building}</div>
      </div>
      <div className="extra content">
        <div className="two buttons">
          <Link to={`/center/${id}`} className="basic button green">Edit</Link>
          <div className="basic button red" onClick={() => deleteCenter(id)}>Delete</div>
        </div>
      </div>
    </div>
  );
}

export default centerCard