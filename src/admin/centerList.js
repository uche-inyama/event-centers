import React from 'react';
import PropTypes from 'prop-types';
import CenterCard from './centerCard';
import CenterListWrapper from './centerListStyle';

const CenterList = ({ centers, deleteCenter }) => {
  const emptyMessage = (
    <p>There are no centers yet in your collection.</p>
  );

  const centerList = (
    <>
      <CenterListWrapper className="center list">
        {centers.map((center, idx) => (
          <CenterCard
            id={idx}
            center={center}
            key={center.id}
            deleteCenter={deleteCenter}
          />
        ))}
      </CenterListWrapper>
    </>
  );
  return (
    <div>
      {centers.length === 0 ? emptyMessage : centerList}
    </div>
  );
};

CenterList.propTypes = {
  centers: PropTypes.arrayOf(
    PropTypes.shape({
      building: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  deleteCenter: PropTypes.func.isRequired,
};
export default CenterList;
