import { connect } from 'react-redux';
import EditForm from '../itemForm/editForm';
import { updateCenter } from '../action';

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: (id, data) => {
      dispatch(updateCenter(id, data))
    }
  }
}

const connectedEditForm = connect(null, mapDispatchToProps)(EditForm);

export default connectedEditForm;