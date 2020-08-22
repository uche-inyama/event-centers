import {
  REQUEST_CENTERS,
  RECEIVE_CENTERS
} from '../action';


const initialState = {
  isFetching: false,
  centers: []
}
const AsyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CENTERS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_CENTERS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}

export default AsyncReducer;