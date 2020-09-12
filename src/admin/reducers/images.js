import { SAVE_IMAGE } from '../actions';

const images = (state = [], action) => {
  switch (action.types) {
    case SAVE_IMAGE:
      return [state, ...action.image];
    default:
      return state;
  }
};

export default images;
