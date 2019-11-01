import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { Tags } from "../../components/Dashboard/types";

const createAction = actionCreatorFactory("DASHBOARD");
const createAsyncAction = asyncFactory<IAppState>(createAction);

export const selectTag = createAction<Tags>("SELECT_TAG");
