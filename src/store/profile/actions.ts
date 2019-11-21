import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "../types";
import { IUserProfile, SubscriptionType, Roles } from "./types";
import { ILoginRequest } from "../../components/Login/types";

const createAction = actionCreatorFactory("PROFILE");
const createAsyncAction = asyncFactory<IAppState>(createAction);

const fakeUser = {
  name: "Fabio",
  lastName: "Cortés",
  subscriptionPlan: SubscriptionType.Premium,
  role: Roles.User,
  address: "Calle 154 #17-33",
};

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

export const fetchProfile = createAsyncAction<void, IUserProfile, Error>(
  "FETCH_PROFILE",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return fakeUser;
});
