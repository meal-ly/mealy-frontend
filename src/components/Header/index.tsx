import * as React from "react";
import { NavLink } from "react-router-dom";
import { IHeaderProps} from "./types";
import Enter from "../Icons/Enter";
import User from "../Icons/User";
import "./styles.scss";
import { IAppState } from "../../store/types";
import { useSelector as useMappedState } from "react-redux";

const selector = (state: IAppState) => {
  return {
    isAuthenticated: state.profile.isLoggedIn,
  };
};

const noAuthLiknks = [
  {
    text: "Login",
    icon: <Enter />,
    link: "/login",
  },
];

const authLiknks = [
  {
    text: "Profile",
    icon: <User width={17.68} height={19.24} />,
    link: "/profile",
  },
];

const Header = ({ location }: IHeaderProps) => {
  const { isAuthenticated } = useMappedState(selector);

  const links = React.useMemo(
    () => {
      if (isAuthenticated) {
        return authLiknks;
      }
      return noAuthLiknks;
    }, [isAuthenticated],
  );

  return (
    <header className="row container">
      <NavLink to="/" className="row">
        <img
          src="/assets/logo_small.png"
          alt="logo"
          width="150"
        />
      </NavLink>
      <div className="header-links row">
        {links.map((link) => {
          return (
            <NavLink to={link.link} className="row link-container" >
              {link.icon}
              <p>{link.text}</p>
            </NavLink>
          );
        })
        }
      </div>
    </header>
  );
};

export default Header;
