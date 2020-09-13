/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CenterCard from './centerCard';

describe.skip('cardCenter', () => {
  test('Edit text & Delete text', () => {
    const history = createMemoryHistory();
    const props = {
      deleteCenter: jest.fn(),
      center: {
        building: 'Cherry',
      },
    };
    render(
      <Router history={history}>
        <CenterCard {...props} />
      </Router>,
    );
    screen.debug();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });
});
