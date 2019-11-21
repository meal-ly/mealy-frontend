import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IProfileReducerState } from "./types";
import { fetchProfile, login, logout } from "./actions";

const initialState: IProfileReducerState = {
  isLoggedIn: true,
  isLoadingProfile: false,
  user: undefined,
};

const profileReducer = reducerWithInitialState(initialState)
  .case(login, (state) => ({
    ...state,
    isLoggedIn: true,
  }))
  .case(logout, (state) => ({
    ...state,
    isLoggedIn: false,
  }))
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
      user,
    };
  });

export default profileReducer;
