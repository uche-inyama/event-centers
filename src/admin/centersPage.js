import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CenterList from './centerList';
import { requestCenters, deleteCenter } from './actions';


const CentersPage = ({ centers, fetchCenters, deleteCenter }) => {
  console.log('centers page loaded');
  console.log(centers)
  return (
    <div>
      <h2>Centers Page</h2>
      <Link to="/center/new">Add Center</Link>
      <CenterList
        centers={centers}
        deleteCenter={deleteCenter}
      />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCenters: (() => {
      dispatch(requestCenters());
    }),
    deleteCenter: ((id) => {
      dispatch(deleteCenter(id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);