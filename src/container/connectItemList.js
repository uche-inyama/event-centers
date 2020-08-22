import { connect } from 'react-redux';
import ItemList from '../itemList/itemList';
import { updateCenter, deleteCenter, fetchCenters } from '../action';

const mapStateToProps = (state) => {
  return {
    centers: state.eventCenters.centers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateFormSubmit: (center) => {
      dispatch(updateCenter(center));
    },
    onDelete: (id) => {
      dispatch(deleteCenter(id))
    },
    requestCenters: (() => {
      dispatch(fetchCenters())
    })
  }
}


const connectItemList = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default connectItemList;