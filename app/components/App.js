import React from 'react';
import Header from './Header';

 class App extends React.Component{


 	constructor(props){
 		super(props);
		this.state = {
			accountAddress: "0x3fa4bd99a11d269cd56bd8c272f483f789c5fe7f",
			accountPasswd: "passwA"
		};

 		
 	}

 	// <Header account={{address:this.state.accountAddress,passwd:this.state.accountPasswd}}/>
 	// 			<div className="container">
 	// 				{this.props.children}
		// 		</div>

 	render(){
 		return (

 			<AppBar
			    title="Title"
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  	/>
		)
 	}

 }

 export default App;