import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";

export interface IRecipesReducerState {
  recipes: Recipe[] | null;
  isLoadingRecipes: boolean;
}
