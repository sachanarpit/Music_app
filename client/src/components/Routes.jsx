import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { MusicPage } from "./Music_Page";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/music">
          <MusicPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
