import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export const Routes = (): ReactElement => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);
