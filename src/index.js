import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="main">
      <h1 className="wel">Welcome to my Counter App</h1>
      <br />
      <p className="count">Your count is: {count}</p>

      <section className="center">
        <button onClick={decrement} className="btn">
          -
        </button>
        <button onClick={increment} className="btn">
          +
        </button>
      </section>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
