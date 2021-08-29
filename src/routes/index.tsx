import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { PATHS } from "./paths";

import { ChatView } from "src/views/application/chat";
import { ExpensesView } from "src/views/application/expenses";
import { SettingsView } from "src/views/application/settings";

export const AppRoutes = () => {
  return (
    <Switch>
      <Redirect to={PATHS.EXPENSES} />
      <Route path={PATHS.APP}>
        <Route path={PATHS.EXPENSES} component={ExpensesView} />
        <Route path={PATHS.CHAT} component={ChatView} />
        <Route path={PATHS.SETTING} component={SettingsView} />
      </Route>
    </Switch>
  );
};
