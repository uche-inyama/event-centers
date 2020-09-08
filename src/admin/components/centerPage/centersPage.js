import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CenterList from '../centerList/centerList';
import { deleteCenter } from '../../actions';
import CentersPageWrapper from './centersPageStyle';

export const CentersPage = ({ centers, deleteCenter }) => (
  <CentersPageWrapper>
    <h2>Centers Page</h2>
    <Link to="/center/new" className="add-center">Add Center</Link>
    <CenterList
      centers={centers}
      deleteCenter={deleteCenter}
    />
  </CentersPageWrapper>
);

const mapStateToProps = state => ({
  centers: state.centers,
});

const mapDispatchToProps = dispatch => ({
  deleteCenter: (id => {
    dispatch(deleteCenter(id));
  }),
});

CentersPage.propTypes = {
  centers: PropTypes.arrayOf(
    PropTypes.shape({
      building: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  deleteCenter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);
