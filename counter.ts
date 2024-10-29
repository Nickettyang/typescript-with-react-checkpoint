import React, { Component } from "react";

// Step 1: Define an interface for the component state
interface CounterState {
  count: number; // 'count' should be of type number
}

// Step 2: Define an empty interface for props, as there are none
interface CounterProps {}

// Step 3: Extend the Component with state and props types
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0, // Initialize count to 0
  };

  // Step 4: Type the method
  increment = (): void => {
    // Update state using setState
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // Step 5: Ensure that the return type is JSX.Element
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
