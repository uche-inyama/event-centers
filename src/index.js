import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import App from './App';
import store from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
