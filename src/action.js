export const SET_CENTERS = 'SET_CENTERS';
export const POST_CENTERS = 'POST_CENTERS';
export const CENTER_FETCHED = 'CENTER_FETCHED';
export const CENTER_UPDATED = 'CENTER_UPDATED';
export const CENTER_DELETED = 'CENTER_DELETED';

export const setCenters = (centers) => {
  return {
    type: SET_CENTERS,
    centers
  };
};

export const postCenters = (centers) => {
  return {
    type: POST_CENTERS,
    centers
  }
}

export const centerFetched = (center) => {
  return {
    type: CENTER_FETCHED,
    center
  }
}

export const centerUpdated = (center) => {
  return {
    type: CENTER_UPDATED,
    center
  }
}

export const centerDeleted = (centerId) => {
  return {
    type: CENTER_DELETED,
    centerId
  }
}

export const requestCenters = () => {
  return dispatch => {
    fetch('http://localhost:3002/api/v1/centers')
      .then(res => res.json())
      .then(data => {
        dispatch(setCenters(data));
      });
  }
}

export const saveCenter = (formData) => {
  let data = new FormData(formData);
  return dispatch => {
    fetch('http://localhost:3002/api/v1/centers', {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json())
      .then(json => {
        dispatch(postCenters(json))
      })
  }
}

// for Edit Centers
export const centerFetch = (id) => {
  return dispatch => {
    fetch(`http://localhost:3002/api/v1/centers/${id}`)
      .then(res => res.json())
      .then(data => dispatch(centerFetched(data.center)))
  }
}

export const centerUpdate = (id, formData) => {
  const data = new FormData(formData);
  return dispatch => {
    fetch(`http://localhost:3002/api/v1/centers/${id}`, {
      method: "PUT",
      mode: "cors",
      body: data
    }).then(response => response.json())
      .then(json => {
        dispatch(centerUpdated(json))
      })
  }
}

export const deleteCenter = (id) => {
  return dispatch => {
    fetch(`http://localhost:3002/api/v1/centers/${id}`, {
      method: "delete",
      mode: "cors",
    })
      .then(() => {
        dispatch(centerDeleted(id))
      })
  }
}

