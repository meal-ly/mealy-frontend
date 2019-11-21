import * as React from "react";
import { useDispatch, useSelector as useMappedState } from "react-redux";
import * as recipeActions from "../../store/recipe/actions";
import { IAppState, MealyDispatch } from "../../store/types";

export const useComponentState = () => ({
  ...useSelectors(),
  ...useActions(),
});

const useSelectors = () =>
  useMappedState((state: IAppState) => {
    const recipe = state.recipe.recipe;
    const isLoadingRecipe = state.recipe.isLoadingRecipe;
    return {
      recipe,
      isLoadingRecipe,
    };
  });

const useActions = () => {
  const dispatch = useDispatch<MealyDispatch>();
  return React.useMemo(
    () => ({
      fetchRecipe: (recipeId: string) => dispatch(recipeActions.fetchRecipe(recipeId)),
    }),
    [dispatch],
  );
};
