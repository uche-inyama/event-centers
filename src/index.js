import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import App from './admin/components/app/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
