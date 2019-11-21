import { createSelector } from "reselect";
import { IAppState } from "../types";
import { Tags } from "../../components/Dashboard/types";
import { IRecipesReducerState } from "./types";
import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";
// import { tag } from "../dashboard/selectors";

const recipes = (state: IAppState) => state.recipes.recipes;
const tag = (state: IAppState) => state.dashboard.tag;

export const recipesFilteredbyTagSelector = createSelector(
  recipes,
  tag,
  (recipesArray, tagSelected) => {
    if (recipes) {
      if (tagSelected === Tags.all) {
        return recipesArray;
      }
      return recipesArray.filter((recipe: Recipe) => recipe.tag === tagSelected);
    }
    return null;
  },
);
