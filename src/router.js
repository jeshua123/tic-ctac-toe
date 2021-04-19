import React from "react";
import { Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import Main from "./modules/pages";
import Game from "./modules/pages/Game";
import WinView from "./modules/pages/winViewx";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Route path="/game">
        <Game />
      </Route>
      <Route path="/winView">
        <WinView />
      </Route>
    </Switch>
  );
}
export default injectContext(Router);
