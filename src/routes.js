import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import ListPage from './components/ListPage';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/list" component={ListPage} />
    </Switch>
  </BrowserRouter>
);