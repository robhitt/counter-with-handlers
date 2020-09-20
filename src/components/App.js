import React, { Component } from 'react';
import Count from './Count'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    }

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      this.increaseCount();
    } else if (e.key === 'ArrowDown') {
      this.decreaseCount();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Count
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
      </div>
    )
  }
}

export default App;