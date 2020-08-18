const axios = require('axios');
export const REQUEST_CENTERS = 'REQUEST_CENTERS';
export const RECEIVE_CENTERS = 'RECEIVE_CENTERS';


const api_url = `http://localhost:3002/api/v1/centers`;

export const requestCenters = () => ({
  type: RECEIVE_CENTERS
});

export const receiveCenters = (data) => ({
  type: RECEIVE_CENTERS,
  data
});

export const fetchCenters = () => {
  return (dispatch) => {
    dispatch(requestCenters());
    return axios.get(
      api_url
    )
      .then(({ data }) => data)
      .then((data) => {
        dispatch(receiveCenters(data));
      });
  };
}