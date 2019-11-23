import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import { IHeaderProps} from "./types";
import Enter from "../Icons/Enter";
import User from "../Icons/User";
import "./styles.scss";
import { IAppState } from "../../store/types";
import { useSelector as useMappedState } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/profile/actions";

const dispatcher = (dispatch: React.Dispatch<any>) => ({
  logoutAction: () =>
    dispatch(logout()),
});

interface ILink {
  text: string;
  icon: JSX.Element;
  route?: string;
  action?: string;
}

const selector = (state: IAppState) => {
  return {
    isAuthenticated: state.profile.isLoggedIn,
  };
};

const noAuthLiknks: ILink[] = [
  {
    text: "Login",
    icon: <Enter />,
    route: "/login",
  },
];

const authLiknks: ILink[] = [
  {
    text: "Profile",
    icon: <User width={17.68} height={19.24} />,
    route: "/profile",
  },
  {
    text: "Logout",
    icon: <Enter />,
    action: "LOGOUT",
  },
];

const Header = ({ location }: IHeaderProps) => {
  const { isAuthenticated } = useMappedState(selector);
  const { logoutAction } = dispatcher(useDispatch());

  const links = React.useMemo(
    () => {
      if (isAuthenticated) {
        return authLiknks;
      }
      return noAuthLiknks;
    }, [isAuthenticated],
  );

  const handleLogout = () => {
    logoutAction();
  };

  return (
    <header className="row container">
      <Link to="/" className="row">
        <img
          src="/assets/logo_small.png"
          alt="logo"
          width="150"
        />
      </Link>
      <div className="header-links row">
        {links.map((link) => {
          if (link.route) {
            return (
              <NavLink key={link.text} to={link.route} className="row link-container" >
                {link.icon}
                <p>{link.text}</p>
              </NavLink>
            );
          }
          if (link.action) {
            return (
              <div onClick={handleLogout} key={link.text} className="row link-container" >
                {link.icon}
                <p>{link.text}</p>
              </div>
            );
          }
        })
        }
      </div>
    </header>
  );
};

export default Header;
