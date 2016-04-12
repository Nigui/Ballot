import React from 'react';
import Paper from 'material-ui/lib/paper';
import Avatar from 'material-ui/lib/avatar';


const styles = {

  pic: {
    textAlign: "right"
  },
  address: {
    textAlign: "center"
  },
  wallet: {
    textAlign: "left"
  }

};

export default class IDLeftCard extends React.Component {


  render() {
    return (
      <Paper id="idLeftCard" className="pure-g">

        <div className="pure-u-1-3 pure-u-sm-1-5" style={styles.pic}>
          <Avatar src="images/avatar.png" backgroundColor="#ecf0f1" />
        </div>

        <h4 className="pure-u-1-3 pure-u-sm-3-5" style={styles.address}>0x3278e960eaa422eda5d35c98b4e4f18899d7f4e7</h4>

        <h4 className="pure-u-1-3 pure-u-sm-1-5" style={styles.wallet} ><span id="etherSymbol">Ξ</span> 5.001</h4>

      </Paper>

    );
  }

}
