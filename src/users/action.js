export const GET_CENTERS = 'GET_CENTERS';

export const getCenters = (centers) => {
  return {
    type: GET_CENTERS,
    centers
  }
}

export const receiveCenters = () => {
  const url = `http://localhost:3002/api/v1/centers`
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(getCenters(data))
      });
  }
}