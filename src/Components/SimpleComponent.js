import React from "react";

class SimpleComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default SimpleComponent;
