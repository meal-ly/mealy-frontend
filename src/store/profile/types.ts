export enum SubscriptionType {
  Premium = "premium",
  Free = "free",
}

export enum Roles {
  Admin =  "admin",
  User = "user",
}

export interface IUserProfile {
  name: string;
  lastName: string;
  subscriptionPlan: SubscriptionType;
  role: Roles;
  address: string;
}

export interface IProfileReducerState {
  isLoggedIn: boolean;
  isLoadingProfile: boolean;
  user: IUserProfile | undefined;
}
