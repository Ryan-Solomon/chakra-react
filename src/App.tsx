import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GreetingPage } from './pages/GreetingPage';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/greeting'>
        <GreetingPage />
      </Route>
    </Switch>
  </Router>
);
