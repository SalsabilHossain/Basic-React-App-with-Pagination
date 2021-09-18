import { React, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="count-container">
        <div className="count-text">{count}</div>
        <button className="count-btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
