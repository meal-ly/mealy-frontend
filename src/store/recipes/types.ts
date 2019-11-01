import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";

export interface IRecipesReducerState {
  recipes: Recipe[] | null;
  selectedRecipe: Recipe | undefined;
  isLoadingRecipes: boolean;
}
