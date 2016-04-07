import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <p>Welcome to the home page</p>
      </div>
    );
  }

};
