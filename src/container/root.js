import React from 'react';
import { Provider } from 'react-redux';
import ConnectedItemList from './connectItemList';
import configureStore from '../configureStore';
import ConnectedForm from './connectedForm';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      {/* <ConnectedForm /> */}
      <ConnectedItemList />
    </Provider>
  )
}

export default Root
