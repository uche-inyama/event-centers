import { connect } from 'react-redux'
import CreatedCenter from '../admin/createCenter'
import fetchCenters from '../action'

const mapDispatchToProps = (dispatch) => {
  return {
    requestCenters: (() => {
      return dispatch(fetchCenters())
    })
  }
}

const connectedCreateCenter = connect(null, mapDispatchToProps)(CreatedCenter);

export default connectedCreateCenter;