import * as React from "react";
import { useDispatch, useSelector as useMappedState } from "react-redux";
import * as dashboardActions from "../../store/dashboard/actions";
import * as recipesActions from "../../store/recipes/actions";
import { IAppState, MealyDispatch } from "../../store/types";
import { Tags } from "./types";
import { recipesFilteredbyTagSelector } from "../../store/recipes/selectors";

export const useComponentState = () => ({
  ...useSelectors(),
  ...useActions(),
});

const useSelectors = () =>
  useMappedState((state: IAppState) => {
    const tag = state.dashboard.tag;
    const recipes = recipesFilteredbyTagSelector(state);
    const isLoadingRecipes = state.recipes.isLoadingRecipes;
    return {
      tag,
      recipes,
      isLoadingRecipes,
    };
  });

const useActions = () => {
  const dispatch = useDispatch<MealyDispatch>();
  return React.useMemo(
    () => ({
      selectTag: (tag: Tags) =>
        dispatch(dashboardActions.selectTag(tag)),
      fetchRecipes: () => dispatch(recipesActions.fetchRecipes()),
    }),
    [dispatch],
  );
};
