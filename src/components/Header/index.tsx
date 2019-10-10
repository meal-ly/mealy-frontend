import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => <header>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/Register">Register</NavLink>
  <NavLink to="/login">Login</NavLink>
</header>;

export default Header;
