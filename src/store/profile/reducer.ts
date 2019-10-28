import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IProfileReducerState } from "./types";
import { fetchProfile } from "./actions";

const initialState: IProfileReducerState = {
  isLoggedIn: true,
  isLoadingProfile: false,
  user: undefined,
};

const profileReducer = reducerWithInitialState(initialState)
  .case(fetchProfile.async.started, (state) => ({
    ...state,
    isLoadingProfile: true,
  }))
  .case(fetchProfile.async.failed, (state, { error }) => ({
    ...state,
    isLoadingProfile: false,
    error,
  }))
  .case(fetchProfile.async.done, (state, { result: user }) => {
    return {
      ...state,
      isLoadingProfile: false,
      isLoggedIn: true,
      user,
    };
  });

export default profileReducer;
