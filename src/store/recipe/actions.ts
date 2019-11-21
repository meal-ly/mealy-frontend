import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";
import axios from "axios";

const createAction = actionCreatorFactory("RECIPE");
const createAsyncAction = asyncFactory<IAppState>(createAction);

export const fetchRecipe = createAsyncAction<string, Recipe, Error>(
  "FETCH_RECIPE",
  async (recipeId: string) => {
    const response  = await axios.get(`https://mealy.now.sh/api/recipes/${recipeId}`);
    return response.data.data;
});
