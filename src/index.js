import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import ThumbApp from "./ThumbApp";
import { fetchThumbs } from "./actions"

 
store.dispatch(fetchThumbs())
 
ReactDOM.render(
  <Provider store={store}>
    <ThumbApp />
  </Provider>,
  document.getElementById("container")
);