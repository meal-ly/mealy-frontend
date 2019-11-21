import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";
import axios from "axios";

const createAction = actionCreatorFactory("RECIPES");
const createAsyncAction = asyncFactory<IAppState>(createAction);

export const fetchRecipes = createAsyncAction<void, Recipe[], Error>(
  "FETCH_RECIPES",
  async () => {
    const response  = await axios.get("https://mealy.now.sh/api/recipes/");
    return response.data.data;
});
