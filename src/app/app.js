import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import AppRoutes from './AppRoutes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';


//pour onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
    {AppRoutes}
  </Router>
, document.getElementById('app'));
