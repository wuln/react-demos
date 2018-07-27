import React, { Component } from 'react';

class HelloMessage extends Component {
  render() {
    return (
      <div className="App">
        hello {this.props.message}
      </div>
    );
  }
}

export default HelloMessage;
