import { createStore, applyMiddleware, compose } from 'redux';
import favoritesReducer from './favReducer';
import thunkMiddleware from 'redux-thunk'

// const composerEnhancer = compose;
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = favoritesReducer;

const store = createStore(  
  rootReducer,
  composerEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;