import React from 'react';
import Ballot from './Ballot';
import BallotNewModal from './BallotNewModal';

class BallotView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			ballots: []
		}
		
	}

	handleBallotValidation(ballot){
		var tmpBallots = this.state.ballots;
		tmpBallots.push(ballot);
		this.setState({
			ballots: tmpBallots
		});
	}

	render(){

		var ballots = this.state.ballots.map(ballot => {
			return(
				<Ballot title={ballot.title} proposals={ballot.proposals}/>
			);
		});

		return(

			<div>
				<div id="ballot_view" >

					<h2>Ballots</h2>

					<ul className="list-group">

						<li id="ballot_list_add" className="list-group-item" data-toggle="modal" data-target="#ballot_new_modal">
							<span className="glyphicon glyphicon-plus col-xs-6 col-centered" />
							<span className="col-xs-6 col-centered" > Add Ballot </span>
						</li>

						{ballots}
						
					</ul>



					<BallotNewModal newModal={this.handleBallotValidation.bind(this)}/>

				</div>

			</div>
		);

	}

}

export default BallotView