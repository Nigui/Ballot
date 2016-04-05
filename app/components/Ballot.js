import React from 'react';


class Ballot extends React.Component{

	render(){

		var propos = this.props.proposals.map(proposal => {
			return(
				<li className="list-group-item">{proposal}</li>
			);
		});

		return(
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title" >{this.props.title}</h2>
				</div>
				<ul className="list-group panel-body">
					{propos}
				</ul>
			</div>
		);
	}

}

export default Ballot;