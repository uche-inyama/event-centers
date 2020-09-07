import reducer from './centers'
import * as actions from '../actions'
import { initStore } from '../../store'

describe.skip('centers reducer', () => {
  let store;
  beforeAll(() => {
    store = initStore()
    store.subscribe(() => {
      console.log(store.getState())
    })
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle POST_CENTERS', () => {
    const data = { id: 1, building: 'Taj', hall: 'Avalon' }

    store.dispatch(actions.postCenters(data));
    expect(store.getState()).toEqual(
      { centers: [{ id: 1, building: 'Taj', hall: 'Avalon' }] }
    )
  })

  it('should handle DELETE_CENTERS', () => {
    store.dispatch(actions.deleteCenter(1))
    expect(store.getState()).toEqual(
      { centers: [] }
    )
  })
  it('should handle UPDATE_CENTERS', () => {
    let data = { id: 1, building: 'Taj', hall: 'Avalon' }
    store.dispatch(actions.postCenters(data));
    store.dispatch(actions.centerUpdated({ "id": 1, "building": "Tajmal", "hall": "Alexis" }))
    expect(store.getState()).toEqual(
      { centers: [{ id: 1, building: 'Tajmal', hall: 'Alexis' }] }
    )
  })
})