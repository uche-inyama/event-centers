/* eslint-disable react/jsx-props-no-spreading */
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
      deleteCenter: jest.fn(),
      centers: [
        {
          id: 1,
          building: 'Taj',
          hall: 'bukky',
          city: 'Lagos',
          state: 'Lagos',
          price: 200,
          capacity: 1000,
        },
      ],
    };
    wrapper = mount(
      <Router history={history}>
        <CentersPage {...props} />
      </Router>,
    );
  });
  it('it renders the item from state', () => {
    expect(wrapper.find('Taj'));
    expect(wrapper.find('Alvan'));
  });
});
