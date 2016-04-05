import React from 'react';
import ProposalItem from './ProposalItem';

class BallotNewModal extends React.Component{


	constructor(props){
		super(props);
		this.state = {title:'',proposals:[]};
	}

	handleUpdateTitle(event){
		this.setState({
			title: event.target.value
		})
	}

	handleAddProposal(event){
		if(event.charCode == 13 && event.target.value.length > 0){ //Enter pressed
			var propos = this.state.proposals;
			propos.push(event.target.value);
			this.setState({
				proposals: propos
			})
			event.target.value = "";
		}
	}

	handleRemoveProposal(index){
		if( index >= 0 && index < this.state.proposals.length ){
			var propos = this.state.proposals;
			propos.splice(index,1);
			this.setState({
				proposals: propos
			});
		}
	}

	handleCloseModal(){
		this.props.newModal(this.state);
		this.setState({title:"",proposals:[]});
	}

	render(){

		var proposalsView = this.state.proposals.map((prop,index) => {
			return(
				<ProposalItem label={prop} onclick={this.handleRemoveProposal.bind(this,index)}/>
			);
		});

		return(
			<div className="modal fade" id="ballot_new_modal" tabindex="-1" >
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h2 className="modal-title">Create a new ballot</h2>
						</div>
						<div className="modal-body">
							<form className="form-horizontal">
								<div className="form-group">
									<label for="ballot_new_modal_title" className="col-sm-2 control-label">Title</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="ballot_new_modal_title" placeholder="Title" onKeyDown={this.handleUpdateTitle.bind(this)}/>
									</div> 
								</div>
								<div className="form-group">
									<label className="col-sm-2 control-label">Proposals</label>
									<div className="col-sm-10">
										<ul className="list-group">
											{proposalsView}
											<input 	type="text" className="form-control" id="ballot_new_modal_new_proposal" 
													placeholder="Proposal" onKeyPress={this.handleAddProposal.bind(this)}/>
										</ul>
									</div>
								</div>
							</form> 
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-success" data-dismiss="modal"
									onClick={this.handleCloseModal.bind(this)}>Add</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default BallotNewModal;