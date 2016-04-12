import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';

import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';

import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';


const styles = {
  header: {
    backgroundColor: "#4FC3F7",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: "20px"
  },
  actions: {
    textAlign: "right"
  },
  radioGroup: {
    marginLeft: "1vw"
  },
  radioIcon: {
    color: "#4FC3F7"
  }

}


export default class BallotCard extends React.Component {

  constructor(props){
    super(props);
    this.state={
      expanded: false
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };





  render(){
    return(
      <Card expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange.bind(this)}>
        <CardHeader
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          style={styles.header}
          titleStyle={styles.headerTitle}
          actAsExpander={true}
          showExpandableButton={true}/>
        <CardText expandable={true} actAsExpander={false} >

          <RadioButtonGroup name="ballot-props" style={styles.radioGroup}>

            <RadioButton
              value="adipiscing" label="adipiscing"
              checkedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_checked</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_unchecked</FontIcon>}/>

            <RadioButton
              value="ut domina" label="ut domina"
              checkedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_checked</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_unchecked</FontIcon>}/>

            <RadioButton
              value=" et verecundum" label="et verecundum"
              checkedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_checked</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_unchecked</FontIcon>}/>

            <RadioButton
              value="Romani nomen" label="Romani nomen"
              checkedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_checked</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons" color={styles.radioIcon.color}>radio_button_unchecked</FontIcon>}/>

          </RadioButtonGroup>

        </CardText>
        <CardActions expandable={true} style={styles.actions}>
           <RaisedButton
             label="Submit"
             icon={<FontIcon className="material-icons" color="#FFFFFF">done</FontIcon>}
             backgroundColor="#4FC3F7"
             labelColor="#FFFFFF"/>
        </CardActions>
      </Card>
    );
  }


}
