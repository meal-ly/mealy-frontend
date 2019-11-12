import { Recipe } from "../../components/Dashboard/components/RecipeCard/types";

export interface IRecipeReducerState {
  recipe: Recipe | null;
  isLoadingRecipe: boolean;
}
