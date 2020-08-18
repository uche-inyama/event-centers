import React from 'react';
import './App.css';
import Admin from './admin/admin';
import ItemList from './itemList/itemList';

const App = () => {
  return (
    <div className="App" >
      <Admin />
      <ItemList />
    </div>
  );
}

export default App;
