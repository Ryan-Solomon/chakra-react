import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { GreetingPage } from './pages/greeting/GreetingPage';
import { HomePage } from './pages/HomePage';
import { TicTacToePage } from './pages/ticTacToe/TicTacToePage';
import { DadJokePage } from './pages/dadjoke/DadJokePage';
import { AccordionPage } from './pages/accordion/AccordionPage';
import { CounterPage } from './pages/counter/CounterPage';
import { SidebarNav } from './components/SidebarNav';

export const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/greeting'>
          <GreetingPage />
        </Route>
        <Route exact path='/tictactoe'>
          <TicTacToePage />
        </Route>
        <Route exact path='/dadjokes'>
          <DadJokePage />
        </Route>
        <Route exact path='/accordion'>
          <AccordionPage />
        </Route>
        <Route exact path='/counter'>
          <CounterPage />
        </Route>
      </Switch>
    </Router>
  );
};
