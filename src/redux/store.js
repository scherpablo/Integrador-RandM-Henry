import { createStore, applyMiddleware, compose } from 'redux';
import favoritesReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = favoritesReducer

const store = createStore(  
  rootReducer,
  composerEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;