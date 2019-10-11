import * as React from "react";
import { NavLink } from "react-router-dom";
import { IHeaderProps} from "./types";
import Enter from "../Icons/Enter";
import "./styles.scss";

const Header = ({ location }: IHeaderProps) => {

  return (
    <header className="row container">
      <NavLink to="/" className="row">
        <img
          src="/assets/logo_small.png"
          alt="logo"
          width="150"
        />
      </NavLink>

      <NavLink to="/login" className="row link-container" >
        <Enter />
        <p>Login</p>
      </NavLink>
    </header>
  );
};

export default Header;
