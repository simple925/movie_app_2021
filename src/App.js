// import PropTypes from "prop-types";
// react application은 한 번에 하나의 component만 redering 할 수 있다는 점
import React from "react";
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // this.setState((c) => ({ count: c.count + 1 }));
    this.setState(function (c) {
      return { count: c.count + 1 };
    });
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
