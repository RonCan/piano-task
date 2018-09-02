import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";
import { Provider } from "react-redux";

function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

const store = configureStore({});

const reactRoot = document.getElementById("react-root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactRoot
);
