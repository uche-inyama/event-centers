import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/index';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
}

export default configureStore;