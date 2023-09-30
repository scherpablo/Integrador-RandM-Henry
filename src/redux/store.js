// import { createStore,applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const composerEnhancer = compose;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
// const store = createStore(
//   rootReducer,
//   // composerEnhancer(applyMiddleware(thunkMiddleware))
// );

export default store;