// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { App, Search } from '../uche';


// describe('App', () => {
//   test('renders App component', async () => {
//     render(<App />);

//     await screen.findByText(/Signed in as/);

//     expect(screen.queryByText(/Searched for JavaScript/)).toBeNull();

//     await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

//     expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
//     screen.debug();
//   });
// })

// describe('Search', () => {
//   test('calls the onChange callback handler', async () => {
//     const onChange = jest.fn();

//     render(
//       <Search value="" onChange={onChange}>
//         Search:
//       </Search>
//     );
//     await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
//     expect(onChange).toHaveBeenCalledTimes(10);
//   });
// })

// import { render, screen, fireEvent } from '@testing-library/react';
// import { Router } from 'react-router-dom'
// import { createMemoryHistory } from 'history'
// import CenterCard from './admin/centerCard';


// describe.only('cardCenter', () => {
//   test('Edit text', () => {
//     const history = createMemoryHistory();
//     let center = {
//       building: 'Cherry'
//     }
//     render(
//       <Router history={history}>
//         <CenterCard center={center} />
//       </Router>
//     );
//     screen.debug();
//     expect(screen.getByText('Edit')).toBeInTheDocument();
//   })
// })