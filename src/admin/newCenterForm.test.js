import React from 'react'
import { shallow } from 'enzyme';
import { CreateCenter } from './newCenterForm';

describe('form', () => {
  let props;
  test('filling the form', () => {
    props = {
      match: {
        params: '1'
      },
      centers: [
        { id: 1, building: "Taj", hall: "bukky" }
      ]
    }
    const onChange = jest.fn();

    const wrapper = shallow(
      <CreateCenter {...props} onChange={onChange} />
    );
    let nameInput = wrapper.find('input').first()
    nameInput.simulate('change', {
      target: { value: 'Jack' },
    })
    nameInput = wrapper.find('input').first()

    console.log(nameInput.props());
    expect(nameInput.props().value).toEqual('Jack')
  })
})