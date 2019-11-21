import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IRecipeReducerState } from "./types";
import { fetchRecipe } from "./actions";

const initialState: IRecipeReducerState = {
  recipe: null,
  isLoadingRecipe: false,
};

const recipeReducer = reducerWithInitialState(initialState)
  .case(fetchRecipe.async.started, (state) => ({
    ...state,
    isLoadingRecipe: true,
  }))
  .case(fetchRecipe.async.failed, (state, { error }) => ({
    ...state,
    isLoadingRecipe: false,
    error,
  }))
  .case(fetchRecipe.async.done, (state, { result: recipe }) => {
    return {
      ...state,
      isLoadingRecipe: false,
      recipe,
    };
  });

export default recipeReducer;
