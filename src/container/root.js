import React from 'react';
import { Provider } from 'react-redux';
import ItemList from '../itemList/itemList';
import ItemDetail from '../itemdetail/itemdetail';
import configureStore from '../configureStore';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <ItemList />
      <ItemDetail />
    </Provider>
  )
}


export default Root
