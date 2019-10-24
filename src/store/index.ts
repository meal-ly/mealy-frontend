import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";

import { AnyAction } from "typescript-fsa";
import { History } from "history";
import { buildRootReducer } from "./reducers";
import { IAppState, PCCStore } from "./types";

const configureStore = (browserHistory: History): PCCStore => {
  const rootReducer = buildRootReducer(browserHistory);

  const thunk: ThunkMiddleware<IAppState, AnyAction> = thunkMiddleware;
  const middlewareEnhancer = applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
  );

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);

  return store;
};

export { configureStore };
