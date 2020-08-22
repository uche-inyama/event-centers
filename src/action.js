const axios = require('axios');
export const REQUEST_CENTERS = 'REQUEST_CENTERS';
export const RECEIVE_CENTERS = 'RECEIVE_CENTERS';
export const ADD_CENTER = 'ADD_CENTER';
export const UPDATE_CENTER = 'UPDATE_CENTER';
export const EDIT_CENTER = 'EDIT_CENTER';
export const DELETE_CENTER = 'DELETE_CENTER';

const api_url = `http://localhost:3002/api/v1/centers`;


export const requestCenters = () => ({
  type: RECEIVE_CENTERS
});

export const receiveCenters = (data) => ({
  type: RECEIVE_CENTERS,
  data
});

export const addCenter = (data) => ({
  type: ADD_CENTER,
  data
});

export const editCenter = (id) => ({
  type: EDIT_CENTER,
  id
});

export const updateCenter = (id, data) => ({
  type: UPDATE_CENTER,
  id,
  data
});

export const deleteCenter = (id) => ({
  type: DELETE_CENTER,
  id
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

export const deleteApi = (item) => {
  let delete_URL = api_url + `/${item.id}`
  fetch(delete_URL, {
    method: "DELETE"
  })
}