import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";

const createAction = actionCreatorFactory("RECIPE");
const createAsyncAction = asyncFactory<IAppState>(createAction);

const fakeRecipe = {
    id: "1",
    title: "Bocados de tostadas Gourmet",
    imgUrl: "/assets/recipe.jpg",
    likes: 3,
    people: 4,
    time: "30 min",
  };

export const fetchRecipe = createAsyncAction<string, Recipe, Error>(
  "FETCH_RECIPE",
  async (recipeId: string) => {
    console.log(recipeId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return fakeRecipe;
});
