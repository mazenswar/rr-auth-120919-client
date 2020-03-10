import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dogs from './Dogs';
import DogShow from './DogShow';
import Profile from './Profile';
import Auth from './Auth';
import '../Stylesheets/master.scss';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/dogs/:id" component={DogShow} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
}
