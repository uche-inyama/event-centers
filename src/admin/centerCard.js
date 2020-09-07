import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CenterCardWrapper from './centerCardStyle';

const centerCard = ({ center, deleteCenter }) => {
  const {
    id, building, hall, city, price, capacity,
  } = center;

  const handleDelete = e => {
    e.preventDefault();
    deleteCenter(id);
  };

  return (
    <CenterCardWrapper className="center">
      <div className="content">
        <div className="building">{building}</div>
        <div className="hall">{hall}</div>
        <div className="city">{city}</div>
        <div className="price">
          {price}
          {' '}
          units
        </div>
        <div className="capacity">
          {capacity}
          {' '}
          units
        </div>
      </div>
      <div className="extra content">
        <div className="two buttons">
          <Link to={`/center/${id}`} className="basic button green">Edit</Link>
          <div className="basic button red" onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </CenterCardWrapper>
  );
};

centerCard.propTypes = {
  deleteCenter: PropTypes.func.isRequired,
  center: PropTypes.shape({
    building: PropTypes.string.isRequired,
    hall: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
};

export default centerCard;
