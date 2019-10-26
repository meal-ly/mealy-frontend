import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "./src/store";
import App from "./src/routes/App";

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <App browserHistory={browserHistory} store={store} />
  </Provider>
  , document.getElementById("app"));
