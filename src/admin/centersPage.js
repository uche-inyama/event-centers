import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CenterList from './centerList';
import { deleteCenter } from './actions';


export const CentersPage = ({ centers, deleteCenter }) => {
  console.log('centers page loaded');
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
    deleteCenter: ((id) => {
      dispatch(deleteCenter(id))
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);