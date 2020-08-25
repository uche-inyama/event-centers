import React from 'react';
import { HallImageWrapper } from './centerCardStyle'

const centerCard = ({ hallname, city, state, image }) => {
  let image_url = `"http://localhost:3002${image}"`;
  return (
    <HallImageWrapper >
      <div className="image-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        />
      </div>
      <div className="basic-center-info">
        <div className="hall-detail">
          <p>hall: <span>{hallname}</span></p>
        </div>
      </div>
    </HallImageWrapper >
  );
};

export default centerCard