import React from "react";

class SecondCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  increment() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    setInterval(() => this.increment(), 1000);
  }

  render() {
    return <div>Second: {this.state.seconds}</div>;
  }
}

export default SecondCounter;
