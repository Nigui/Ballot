import React from 'react';

class ProposalItem extends React.Component{

	constructor(props){
		super(props);
		this.state = {isHovered: false};
	}

	handleMouseOver(){
		this.setState({isHovered:true});
	}

	handleMouseLeave(){
		this.setState({isHovered:false});
	}

	render(){

		var buttonClass = this.state.isHovered ? null : "gone";

		return(
			<li className="list-group-item" onMouseOver={this.handleMouseOver.bind(this)}
											onMouseLeave={this.handleMouseLeave.bind(this)}>
				<span className={"glyphicon glyphicon-remove "+buttonClass} 
		   			 	onClick={this.props.onclick}/>{this.props.label}
			</li>
		);
	}

}

export default ProposalItem;	