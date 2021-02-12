import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { GreetingPage } from './pages/greeting/GreetingPage';
import { HomePage } from './pages/HomePage';

export const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/greeting'>
        <GreetingPage />
      </Route>
    </Switch>
  </Router>
);
