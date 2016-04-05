import React from 'react';
import Link from 'react-router';
import rpc from 'jrpc2';

class Header extends React.Component{

	constructor(props){
		super(props);
		this.state = {wallet: 0};
	}

	handleRefreshWallet(){

		var http = new rpc.httpTransport({port:8000, hostname:'localhost'});
		var client = new rpc.Client(http);

		var _this = this;

		client.invoke('personnal_unlockAccount',[this.props.account.address,this.props.account.passwd],function(err,raw){
			console.log(err,raw);
			var balance = Web3.fromWei(Web3.eth.getBalance(this.props.accountAddress),'ether');
			_this.setState({wallet:balance});
		});
	}

	render(){
		
		return(
			<div className="container-fluid">
				<header className="row">
					<img id="header_icon" className="col-xs-1 " alt="SQLI" src={'/favicon.png'} />
					<h2 className="col-xs-9">{this.props.account.address}</h2>
					<span className="col-xs-1" onClick={this.handleRefreshWallet.bind(this)}>{this.state.wallet} Ether</span>
				</header>
			</div>
		);
	}
}

export default Header;

// <button className=" btn btn-default" type="button">
// 						<span className="glyphicon glyphicon-log-out"></span> 
// 					</button>