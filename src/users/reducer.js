import { GET_CENTERS } from './action'

const centers = (state, action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...state, ...action.centers]
    default:
      return state
  }
}

export default centers;