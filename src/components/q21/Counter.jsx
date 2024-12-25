import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onDoubleClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
