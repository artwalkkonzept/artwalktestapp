import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// Our reducer functions lives inside this module
import reducer from "./reducers";

// Import fetch action
export const addBild = (artwalkId, bild) => ({
  type: 'ADD_BILD',
  bild: bild,
  artwalkId: artwalkId
});

export const addArtwalk = (id, name, bilds) => ({
  type: 'ADD_ARTWALK',
  id: id,
  name: name,
  bilds: bilds
});

const API_URL = process.env.REACT_APP_API_URL;

export const fetchArtwalks = _ => async function (dispatch) {
  const url = `${API_URL}/artwalks`;
  console.log(`Fetching from ${url}`);
  const result = await fetch(url);
  const data = await result.json();
  for (const artwalk of data) {
    dispatch(addArtwalk(artwalk._id, artwalk.name, artwalk.bilds));
  }
};

// Logging middleware for the store. Prints out all actions in the redux store to the browser console.
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

// Create the store with some initial data from a json file.
// Adding the logging middleware from above as well.
const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));
store.dispatch(fetchArtwalks());

ReactDOM.render(
  // Provide the store to all components from <App> and below
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
