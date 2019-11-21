import { RouterState } from "connected-react-router";
import { Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "typescript-fsa";

import { IProfileReducerState } from "./profile/types";
import { IDashboardReducerState } from "./dashboard/types";
import { IRecipesReducerState } from "./recipes/types";
import { IRecipeReducerState } from "./recipe/types";

export interface IAppState {
  profile: IProfileReducerState;
  dashboard: IDashboardReducerState;
  recipes: IRecipesReducerState;
  recipe: IRecipeReducerState;
  router: RouterState;
}

export type MealyDispatch = ThunkDispatch<IAppState, undefined, AnyAction>;
export type MealyStore = Store<IAppState, AnyAction> & { dispatch: MealyDispatch };
