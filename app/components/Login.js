import React from 'react';

class Login extends React.Component{

	render(){

		return (

			<div className="jumbotron">
				<h1> Please Authenticate </h1>
				<button type="button" className="btn btn-danger">It's me</button>
			</div>

		);	
	}

}

export default Login;