import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CenterList from './centerList';
import { deleteCenter } from './actions';
import { CentersPageWrapper } from './centersPageStyle'


export const CentersPage = ({ centers, deleteCenter }) => {
  console.log('centers page loaded');
  return (
    <CentersPageWrapper>
      <h2>Centers Page</h2>
      <Link to="/center/new" className="add-center">Add Center</Link>
      <CenterList
        centers={centers}
        deleteCenter={deleteCenter}
      />
    </CentersPageWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCenter: ((id) => {
      dispatch(deleteCenter(id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);