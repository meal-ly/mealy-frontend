import * as React from "react";
import "./styles.scss";
import Loading from "../Common/Loading";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../store/profile/actions";
import { useSelector as useMappedState } from "react-redux";
import { IAppState } from "../../store/types";
import ProfileDetails from "./ProfileDetails";

const dispatcher = (dispatch: React.Dispatch<any>) => ({
  fetchUserInfo: () =>
    dispatch(fetchProfile()),
});

const selector = (state: IAppState) => {
  return {
    isLoadingProfile: state.profile.isLoadingProfile,
    profile: state.profile.user,
  };
};

const Profile = () => {
  const { fetchUserInfo } = dispatcher(useDispatch());
  const { isLoadingProfile, profile } = useMappedState(selector);

  React.useEffect(() => {
    fetchUserInfo();
    }, [],
  );

  return (
    <div className="container column profile">
      {isLoadingProfile &&
        <Loading />
      }
      {!isLoadingProfile && profile &&
        <ProfileDetails profile={profile} />
      }
    </div>
  );
};

export default Profile;
