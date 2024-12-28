import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  if (count < 0) {
    alert("number must not be less then zero");
    setCount(0);
  } else if (count > 5) {
    alert("number shouldnot be greater then 5");
    setCount(5);
  }
  return (
    <div>
      <h2>Counter</h2>
      {count}
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        Increase By One
      </button>
      <button onClick={() => setCount((p) => p - 1)}>Decrease By One</button>
    </div>
  );
};

export default Counter;
