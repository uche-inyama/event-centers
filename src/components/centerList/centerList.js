import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/client';
import CenterCard from '../centerCard/centerCard';
import CenterListWrapper from './centerListStyle';
import { GET_CENTERS, REMOVE_CENTER } from '../../Queries/index';

const CenterListStyle = styled.div`
  position: relative;
  top: 50px;
`;

const CenterList = ({ deleteCenter }) => {
  const emptyMessage = (
    <p>There are no centers yet in your collection.</p>
  );

  const { loading, error, data } = useQuery(GET_CENTERS);
  const [removeCenter,
    { loading: mutationLoading, error: mutationError }] = useMutation(REMOVE_CENTER);

  const centerList = data => {
    const { centers } = data;
    return (
      <>
        <CenterListWrapper className="center list">
          <div className="headers">
            <div className="building-name">Building</div>
            <div className="hall-name"> Hall</div>
            <div className="city-name"> City</div>
            <div className="price-value">Price</div>
            <div className="capacity-value">Capacity</div>
            <div />
            <div />
          </div>
          {centers.map(center => (
            <CenterCard
              key={center.id}
              id={center.id}
              center={center}
              deleteCenter={deleteCenter}
              removeCenter={removeCenter}
              loading={mutationLoading}
              error={mutationError}
            />
          ))}
        </CenterListWrapper>
      </>
    );
  };

  if (loading) return <p>loading...</p>;
  if (error) {
    return (
      <p>
        Error
        {' '}
        {error.message}
      </p>
    );
  }

  return (
    <CenterListStyle className="center-list">
      {data.length === 0 ? emptyMessage : centerList(data)}
    </CenterListStyle>
  );
};

CenterList.propTypes = {
  deleteCenter: PropTypes.func.isRequired,
};
export default CenterList;
