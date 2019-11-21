import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import profileReducer from "../profile/reducer";
import dashboardReducer from "../dashboard/reducer";
import recipesReducer from "../recipes/reducer";
import recipeReducer from "../recipe/reducer";

const buildRootReducer = (history: History) =>
  combineReducers({
    profile: profileReducer,
    dashboard: dashboardReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    router: connectRouter(history),
  });

export { buildRootReducer };
