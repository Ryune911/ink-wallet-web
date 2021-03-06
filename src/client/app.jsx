import React from "react";
import { render } from "react-dom";
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Internalizator from "./services/internalizator";
import {handleConfirmExitShowness} from "./services/confirm-exit-handler";
import {handleExplorerUrl} from "./services/explorer-url-handler";


window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  let store = Internalizator.configureIn18n(
    configureStore(initialState),
    initialState.config.defaultLocale
  );
  store = handleConfirmExitShowness(store);
  store = handleExplorerUrl(store);
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.querySelector(".js-content")
  );
};
