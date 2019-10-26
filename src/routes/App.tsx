import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import Layout from "../components/Layout";
import { MealyStore } from "../store/types";
import { useSessionRoutes } from "./routes";

const Protected = () => <div>protected!</div>;

interface AppProps {
  browserHistory: History<any>;
  store: MealyStore;
}

const App = ({ browserHistory }: AppProps) => {
  const routes = useSessionRoutes();

  return (
    <ConnectedRouter history={browserHistory}>
      <Route render={({ location }) =>
        <Layout location={location}>
          <Switch>
            {routes}
          </Switch>
        </Layout>
      }/>
    </ConnectedRouter>
  );
};

export default App;
