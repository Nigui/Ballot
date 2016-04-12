import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { browserHistory } from 'react-router'


const styles = {

  header: {
    backgroundColor: "#0288D1"
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: "2.5vw"
  },
  validBtn: {
    color: "#FFFFFF"
  },
  floatingLabelStyle: {
    color: "#0288D1"
  },
  underlineFocusStyle: {
    borderColor: "#0288D1"
  }

};

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  handleLogin(){
    contextTypes.router.push("/home");
  };

  render() {
    return (
      <div id="login" >
        <Card >
          <CardHeader
              title="ETHEREUM BALLOT APP"
              titleStyle={styles.headerTitle}
              style={styles.header}/>
            <CardText className="pure-g">
              <TextField
                floatingLabelText="Address" className="pure-u-1"
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
                fullWidth={true}/>
              <TextField
                  floatingLabelText="Passphrase" className="pure-u-1"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                  fullWidth={true} type="password"/>
            </CardText>
          <CardActions style={{textAlign:"right"}}>
              <RaisedButton label="LOGIN" backgroundColor="#0288D1" labelColor="#FFFFFF"
                linkButton={true}/>
          </CardActions>
        </Card>
      </div>
    );
  }

};
