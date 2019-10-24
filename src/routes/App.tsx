import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import { MealyStore } from "../store/types";

interface AppProps {
  browserHistory: History<any>;
  store: MealyStore;
}

const App = ({ browserHistory }: AppProps) => (
  <ConnectedRouter history={browserHistory}>
    <Route render={({ location }) =>
      <Layout location={location}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
  }/>
  </ConnectedRouter>
);

export default App;
