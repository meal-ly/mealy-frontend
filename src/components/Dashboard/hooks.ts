import * as React from "react";
import { useDispatch, useSelector as useMappedState } from "react-redux";
import * as actions from "../../store/dashboard/actions";
import { IAppState, MealyDispatch } from "../../store/types";
import { Tags } from "./types";

export const useComponentState = () => ({
  ...useSelectors(),
  ...useActions(),
});

const useSelectors = () =>
  useMappedState((state: IAppState) => {
    const tag = state.dashboard.tag;
    return {
      tag,
    }
  });

const useActions = () => {
  const dispatch = useDispatch<MealyDispatch>();
  return React.useMemo(
    () => ({
      selectTag: (tag: Tags) =>
        dispatch(actions.selectTag(tag)),
    }),
    [dispatch],
  );
};
