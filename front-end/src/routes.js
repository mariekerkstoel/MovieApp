import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './App';
import Favorites from './components/Favorites'


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/favorites" component={Favorites}/>
    </Switch>
  </Router>
);

export default Routes;
