import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CenterList from './centerList';

describe.only('Center List', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  })
  test('when there is no object inside center\'s array', () => {
    const centers = []
    render(
      <Router history={history}>
        <CenterList centers={centers} />
      </Router>
    )
    expect(screen.queryByText(/centers list/)).toBeNull();
    expect(screen.queryByText(/Green/)).toBeNull();
    screen.debug();
  })
  test('when there is an object inside center\'s array', () => {
    const centers = [
      {
        building: 'Green',
        hall: 'Lavender'
      }
    ]
    render(
      <Router history={history}>
        <CenterList centers={centers} />
      </Router>
    )
    expect(screen.getByText(/centers list/)).toBeInTheDocument();
    expect(screen.queryByText(/Green/)).toBeInTheDocument();
    screen.debug();
  })
})