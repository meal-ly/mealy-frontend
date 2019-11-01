import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IRecipesReducerState } from "./types";
import { fetchRecipes } from "./actions";

const initialState: IRecipesReducerState = {
  recipes: null,
  selectedRecipe: undefined,
  isLoadingRecipes: false,
};

const profileReducer = reducerWithInitialState(initialState)
  .case(fetchRecipes.async.started, (state) => ({
    ...state,
    isLoadingRecipes: true,
  }))
  .case(fetchRecipes.async.failed, (state, { error }) => ({
    ...state,
    isLoadingRecipes: false,
    error,
  }))
  .case(fetchRecipes.async.done, (state, { result: recipes }) => {
    return {
      ...state,
      isLoadingRecipes: false,
      recipes,
    };
  });

export default profileReducer;
