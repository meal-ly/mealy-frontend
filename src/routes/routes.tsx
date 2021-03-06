import * as React from "react";
import { lazy, useMemo } from "react";
import { Redirect, Route } from "react-router";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import { IAppState } from "../store/types";
import { useSelector as useMappedState } from "react-redux";
import Recipe from "../components/recipe";
import Profile from "../components/Profile";

const selector = (state: IAppState) => {
  return {
    isAuthenticated: state.profile.isLoggedIn,
  };
};

export const useSessionRoutes = () => {
  const { isAuthenticated } = useMappedState(selector);

  return useMemo(() => {
    let keyCounter = 0;
    const nextkey = () => keyCounter++;

    const routes = [];

    if (isAuthenticated) {
      routes.push(
        <Route key={nextkey()} exact path="/" component={Dashboard} />,
        <Route key={nextkey()} exact path="/recipe/:recipeId" component={Recipe} />,
        <Route key={nextkey()} exact path="/profile" component={Profile} />,
        <Redirect key={nextkey()} to="/" />,
      );
    } else {
      routes.push(
        <Route key={nextkey()} exact path="/" component={LandingPage} />,
        <Route key={nextkey()} exact path="/login" component={Login} />,
        <Route key={nextkey()} exact path="/register" component={Register} />,
        <Redirect key={nextkey()} to="/" />,
      );
    }
    return routes;
  }, [isAuthenticated]);
};
