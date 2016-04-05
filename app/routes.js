import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import BallotView from './components/BallotView';

export default(

	<Route component={App}>
		<Route path='/' component={BallotView} />
		<Route path='/login' component={Login} />
	</Route>
);