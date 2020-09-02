import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  const centers = [
    {
      building: 'Taj',
      hall: 'Annex'
    }
  ]

  const center = {
    building: 'Taj',
    hall: 'Annex'
  }
  it('sets centers', () => {
    const expectedAction = {
      type: actions.SET_CENTERS,
      centers
    }
    expect(actions.setCenters(centers)).toEqual(expectedAction)
  })

  it('post centers', () => {
    const expectedAction = {
      type: actions.POST_CENTERS,
      centers
    }
    expect(actions.postCenters(centers)).toEqual(expectedAction)
  })

  it('fetched center', () => {
    const expectedAction = {
      type: actions.CENTER_FETCHED,
      center
    }
    expect(actions.centerFetched(center)).toEqual(expectedAction)
  })

  it('updates center', () => {
    const expectedAction = {
      type: actions.CENTER_UPDATED,
      center
    }
    expect(actions.centerUpdated(center)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('', () => {
    fetchMock.getOnce('http://localhost:3002/api/v1/centers', {
      body: { centers: [{ building: 'Taj', hall: 'Avalon' }] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        type: actions.setCenters, body: {
          centers: [
            { building: 'Taj', hall: 'Avalon' }
          ]
        }
      }
    ]
    const store = mockStore({ centers: [] })
    store.dispatch(actions.requestCenters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})