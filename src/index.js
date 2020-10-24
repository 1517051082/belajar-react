import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import HomeComponent from "../container/HomeComponent/HomeComponent";
import rootReducer from "../redux/reducer/GlobalReducer";

const storeRedux = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      {" "}
      <HomeComponent />{" "}
    </Provider>
  </React.StrictMode>,
  rootElement
);
