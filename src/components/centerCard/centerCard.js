/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CenterCardWrapper from './centerCardStyle';
import { GET_CENTERS } from '../../Queries';

const CenterCard = ({
  center, removeCenter,
}) => {
  const {
    id, building, hall, city, price, capacity,
  } = center;

  const handleDelete = e => {
    e.preventDefault();
    removeCenter({
      variables: {
        id,
      },
      refetchQueries: [{ query: GET_CENTERS }],
    });
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

CenterCard.propTypes = {
  removeCenter: PropTypes.func.isRequired,
  center: PropTypes.shape({
    id: PropTypes.string.isRequired,
    building: PropTypes.string.isRequired,
    hall: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenterCard;
