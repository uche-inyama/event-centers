import * as imageUrl from '../imageUrl';

export const SET_CENTERS = 'SET_CENTERS';
export const POST_CENTERS = 'POST_CENTERS';
export const CENTER_FETCHED = 'CENTER_FETCHED';
export const CENTER_UPDATED = 'CENTER_UPDATED';
export const CENTER_DELETED = 'CENTER_DELETED';

const headers = new Headers();
headers.append('Access-Control-Allow-Origin', imageUrl.herokuHost);

export const setCenters = centers => ({
  type: SET_CENTERS,
  centers,
});

export const postCenters = centers => ({
  type: POST_CENTERS,
  centers,
});

export const centerFetched = center => ({
  type: CENTER_FETCHED,
  center,
});

export const centerUpdated = center => ({
  type: CENTER_UPDATED,
  center,
});

export const centerDeleted = centerId => ({
  type: CENTER_DELETED,
  centerId,
});

export const requestCenters = () => dispatch => fetch(`${imageUrl.herokuHost}/api/v1/centers`, {
  mode: 'no-cors',
  headers,
})
  .then(res => res.json())
  .then(data => {
    dispatch(setCenters(data));
  });

export const saveCenter = formData => dispatch => fetch(`${imageUrl.herokuHost}/api/v1/centers`, {
  method: 'POST',
  mode: 'cors',
  body: formData,
})
  .then(response => response.json())
  .then(json => dispatch(postCenters(json)));

// for Edit Centers
export const centerFetch = id => dispatch => fetch(`${imageUrl.herokuHost}/${id}`)
  .then(res => res.json())
  .then(data => dispatch(centerFetched(data.center)));

export const centerUpdate = (id, formData) => {
  const data = new FormData(formData);
  return dispatch => fetch(`${imageUrl.herokuHost}/api/v1/centers/${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: data,
  }).then(response => response.json())
    .then(json => {
      dispatch(centerUpdated(json));
    });
};

export const deleteCenter = id => dispatch => {
  fetch(`${imageUrl.herokuHost}/api/v1/centers/${id}`, {
    method: 'delete',
    mode: 'cors',
  })
    .then(() => {
      dispatch(centerDeleted(id));
    });
};
