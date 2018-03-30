import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const defaultStore = {
  phones: [
    {
      model: "Iphone 7",
      price: 699,
      id: 0,
      status: "old"
    },
    {
      model: "Iphone 8",
      price: 799,
      id: 1,
      status: "old"
    }
  ]
};

const store = createStore(rootReducer, defaultStore, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
