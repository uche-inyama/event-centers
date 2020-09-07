import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { CentersPage } from './centersPage';


describe('center\'s component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    const history = createMemoryHistory();
    props = {
      dispatch: jest.fn(),
      centers: [
        { id: 1, building: 'Taj', hall: "bukky" }
      ]
    }
    wrapper = mount(
      <Router history={history}>
        <CentersPage {...props} />
      </Router>
    )
    console.log(wrapper.debug())
  })
  it('it renders the item from state', () => {
    expect(wrapper.find('Taj'))
    expect(wrapper.find('Alvan'))
  })
})