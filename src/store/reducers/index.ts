import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import profileReducer from "../profile/reducer";

const buildRootReducer = (history: History) =>
  combineReducers({
    profile: profileReducer,
    // recipes: recipesReducer,
    router: connectRouter(history),
  });

export { buildRootReducer };
