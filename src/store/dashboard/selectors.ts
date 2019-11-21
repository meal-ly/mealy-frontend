import { createSelector } from "reselect";
import { IAppState } from "../types";
import { Tags } from "../../components/Dashboard/types";
import { IDashboardReducerState } from "./types";

const context = (state: IAppState) => state.dashboard;

export const tag = createSelector(
  context,
  (state: IDashboardReducerState) => state.tag,
);
