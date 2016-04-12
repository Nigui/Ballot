import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';
import Home from './components/home';
import Login from './components/login';


//pour onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
    <IndexRoute component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login}/>
  </Router>
, document.getElementById('app'));
