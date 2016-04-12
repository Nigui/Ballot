import React from 'react';

export default class MissingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <p>404 page not found</p>
      </div>
    );
  }

};
