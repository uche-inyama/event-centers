/* eslint-disable import/named */
import React from 'react';
import { shallow } from 'enzyme';
import { CreateCenter } from './newCenterForm';

describe('form', () => {
  let props;
  test('filling the form', () => {
    props = {
      match: {
        params: '1',
      },
      centers: [
        { id: 1, building: 'Taj', hall: 'bukky' },
      ],
    };
    const onChange = jest.fn();

    const wrapper = shallow(
      <CreateCenter
        onChange={onChange}
        params={props.match.params}
        centers={props.centers}
      />,
    );
    let nameInput = wrapper.find('input').first();
    nameInput.simulate('change', {
      target: { value: 'Jack' },
    });
    nameInput = wrapper.find('input').first();

    expect(nameInput.props().value).toEqual('Jack');
  });
});
