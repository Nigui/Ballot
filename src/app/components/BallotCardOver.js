import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';

export default class BallotCard extends React.Component {



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



        </CardText>
      </Card>
    );
  }

};
