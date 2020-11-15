import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./styles/main.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HashRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </HashRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
