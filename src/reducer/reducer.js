import { combineReducers } from 'redux';

import {
  REQUEST_CENTERS,
  RECEIVE_CENTERS,
} from '../action';


export const eventCenterPosts = (
  state = {
    isFetching: false,
    results: []
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_CENTERS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CENTERS:
      return {
        ...state,
        isFetching: false,
        result: action.data
      }
    default:
      return state;
  }
};

export const reducer = combineReducers({
  event_centers: eventCenterPosts
})