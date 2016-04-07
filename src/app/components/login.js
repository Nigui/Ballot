import React from 'react';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <p>Welcome to the login page</p>
      </div>
    );
  }

};
