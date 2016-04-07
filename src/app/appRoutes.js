import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import Main from './components/main';
import Home from './components/home';
import Login from './components/login';

const AppRoutes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="login" component={Login}/>
  </Route>
);

export default AppRoutes;
