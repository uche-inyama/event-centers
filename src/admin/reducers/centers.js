import {
  SET_CENTERS, POST_CENTERS, CENTER_UPDATED, CENTER_DELETED,
} from '../actions/actions';

const centers = (state = [], action) => {
  switch (action.type) {
    case SET_CENTERS:
      return [...state, ...action.centers];
    case POST_CENTERS:
      return [...state, action.centers];
    case CENTER_UPDATED:
      return state.map(item => {
        if (item.id === action.center.id) return action.center;
        return item;
      });
    case CENTER_DELETED: {
      return state.filter(x => x.id !== action.centerId);
    }
    default:
      return state;
  }
};
export default centers;
