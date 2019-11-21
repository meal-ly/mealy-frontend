import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IDashboardReducerState } from "./types";
import { selectTag } from "./actions";
import { Tags } from "../../components/Dashboard/types";

const initialState: IDashboardReducerState = {
  tag: Tags.all,
};

const dashboardReducer = reducerWithInitialState(initialState)
  .case(selectTag, (state, tag: Tags) => ({
    ...state,
    tag,
  }));

export default dashboardReducer;
