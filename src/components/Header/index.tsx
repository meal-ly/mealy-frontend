import * as React from "react";
import { NavLink, Link } from "react-router-dom";
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
    route: "/login",
  },
];

const authLiknks = [
  {
    text: "Profile",
    icon: <User width={17.68} height={19.24} />,
    route: "/profile",
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
      <Link to="/" className="row">
        <img
          src="/assets/logo_small.png"
          alt="logo"
          width="150"
        />
      </Link>
      <div className="header-links row">
        {links.map((link) => {
          return (
            <NavLink key={link.text} to={link.route} className="row link-container" >
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
