import fetchMock from 'fetch-mock';
import * as actions from './actions';
import * as url from './imageUrl';
import store from '../store';

describe('actions', () => {
  const centers = [
    {
      building: 'Taj',
      hall: 'Annex',
    },
  ];

  const center = {
    building: 'Taj',
    hall: 'Annex',
  };
  it('sets centers', () => {
    const expectedAction = {
      type: actions.SET_CENTERS,
      centers,
    };
    expect(actions.setCenters(centers)).toEqual(expectedAction);
  });

  it('post centers', () => {
    const expectedAction = {
      type: actions.POST_CENTERS,
      centers,
    };
    expect(actions.postCenters(centers)).toEqual(expectedAction);
  });

  it('fetched center', () => {
    const expectedAction = {
      type: actions.CENTER_FETCHED,
      center,
    };
    expect(actions.centerFetched(center)).toEqual(expectedAction);
  });

  it('updates center', () => {
    const expectedAction = {
      type: actions.CENTER_UPDATED,
      center,
    };
    expect(actions.centerUpdated(center)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('request centers', () => {
    fetchMock.getOnce(`${url.herokuHost}/api/v1/centers`, {
      body: { centers: [{ building: 'Taj', hall: 'Avalon' }] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: actions.SET_CENTERS,
        centers:
          [{ building: 'Taj', hall: 'Avalon' }],
      },
    ];
    store.dispatch(actions.requestCenters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
