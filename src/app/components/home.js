import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import BallotCard from './BallotCard';
import IDLeftCard from './IDLeftCard';


const styles = {
  appBar: {
    backgroundColor: "#4FC3F7"
  },
  tab: {
    backgroundColor: "#4FC3F7",
    fontWeight: "bold"
  },
  content: {
    padding: 0,
    marginTop: "2vh"
  },
};

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      slideIndex: 0,
    };
  }

  handleTabChange = (value) => {
    this.setState({slideIndex: value});
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <AppBar
          title="Ballot"
          zDepth={0}
          iconElementRight={
            <IconButton
              iconClassName="material-icons"> power_settings_new
            </IconButton>
          }
          showMenuIconButton={false}
          style={styles.appBar}/>


          <IDLeftCard/>

          <Paper style={styles.content} className="col-md-8 col-md-offset-2">
            <Tabs
              onChange={this.handleTabChange.bind(this)}
              value={this.state.slideIndex}
              >
              <Tab label="CURRENT" value={0} style={styles.tab}>
                <div className="tabContent">
                  <BallotCard/>
                </div>
              </Tab>

              <Tab label="OVER" value={1} style={styles.tab}>
                  <div className="tabContent">
                  </div>
              </Tab>
            </Tabs>
          </Paper>




      </div>
    );
  }

};
