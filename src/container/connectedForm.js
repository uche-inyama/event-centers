import { connect } from 'react-redux';
import Form from '../itemForm/itemform';
import { addCenter } from '../action';


const mapDispatchToProps = (dispatch) => {
  return {
    FormSubmit: (center) => {
      dispatch(addCenter(center));
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)