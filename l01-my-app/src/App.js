import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "name in state",
    count: 0,
  };

  static defaultProps = {
    a: 0,
    name: "App",
    description: "Application",
    version: "1.0.0",
    emptyFunc: function () {
      return this;
    },
    rowFunc: () => this,
  };

  constructor(props) {
    super(props);
    const { obj1, obj2, emptyFunc } = props;
    console.log(props);
    console.log(obj1 === obj2);
    emptyFunc.bind(this);
    this.increment = this.increment.bind(this);
  }

  increment() {
    let { count } = this.state;
    this.setState({ ...this.state, count: ++count });
  }

  decrement = () => {
    let { count } = this.state;
    this.setState({ ...this.state, count: --count });
  };

  render() {
    const { increment, decrement } = this;
    const { name, count } = this.state;
    const { emptyFunc, rowFunc, children } = this.props;
    console.log(emptyFunc());
    console.log(rowFunc());
    return (
      <div>
        {children}
        <article>{name}</article>
        <article>
          <button onClick={increment}>+</button>
          {count}
          <button onClick={decrement}>-</button>
          <button
            onClick={() => {
              let { count } = this.state;
              const newState = {
                name: this.state.name,
                count: this.state.count - 2,
              };
              const newState2 = {
                name: this.state.name,
                count: this.state.count,
                count: this.state.count - 2,
              };
              const newState3 = {
                ...this.state,
                count: this.state.count - 2,
              };
              const newState4 = Object.assign(this.state, { count: count - 2 });
              this.setState(newState4);
            }}
          >
            {" "}
            -2{" "}
          </button>
        </article>
        <footer>
          <code>{JSON.stringify(this.props, null, 2)}</code>
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </footer>
      </div>
    );
  }
}

// App.defaultProps = {name: "App", description: "Application", version: "1.0.0" }

export default App;
