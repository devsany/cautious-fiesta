import React, { useState } from "react";

const Greeting = () => {
  const [display, setDisplay] = useState(false);
  const handleShow = () => {
    setDisplay("hyy! 🖐🏻 I am sunny");
  };
  return (
    <div>
      <h2>Greeting Card</h2>
      <div>{display && display}</div>
      <div>
        <button onClick={handleShow}>Submit</button>
      </div>
    </div>
  );
};

export default Greeting;
