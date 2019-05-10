import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    return (
      <div>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
