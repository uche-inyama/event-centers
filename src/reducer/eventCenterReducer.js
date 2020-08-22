import {
  UPDATE_CENTER,
  DELETE_CENTER,
  ADD_CENTER,
  REQUEST_CENTERS,
  RECEIVE_CENTERS
} from '../action';

const initialState = {
  centers: [
    {
      building: 'Eni',
      hall: 'Alvan',
      price: 250,
      capacity: 100
    }
  ]
};

const eventCenters = (state = initialState, action) => {
  switch (action.type) {

    case ADD_CENTER: {
      const centers = [...state.centers];
      centers.push(action.data);
      return {
        centers,
      }
    }

    case DELETE_CENTER: {
      const { id } = action;
      const centers = [];
      state.centers.forEach((center, i) => {
        if (id !== i) {
          centers.push(center)
        }
      })
      return {
        centers
      }
    }

    case UPDATE_CENTER: {
      const { id, data } = action;
      const centers = [...state.centers];
      centers[id] = data;
      return {
        centers,
      }
    }

    case REQUEST_CENTERS: {
      return { ...state }
    }

    case RECEIVE_CENTERS: {
      const arr = action.data || [];
      const centers = [...state.centers, ...arr]
      return {
        ...state,
        centers
      }
    }

    default:
      return state
  }
}

export default eventCenters;