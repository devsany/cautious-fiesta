import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingEnhance = ({ name }) => {
  const [displayValue, setDisplayValue] = useState(`hii I am ${name}`);
  const [greet, setGreet] = useState("");
  const handleGreetShow = () => {
    setDisplayValue(greet);
  };
  return (
    <div>
      <div>
        <h2>Greeting Enhance</h2>
      </div>
      {/* greeting intitla and final message */}
      <div>{displayValue}</div>
      <div>
        <input
          type="text"
          value={greet}
          onChange={(e) => setGreet(e.target.value)}
          placeholder="Enter your greeting message"
        />
      </div>
      <div>
        <button onClick={handleGreetShow}>Greet Message</button>
      </div>
    </div>
  );
};
GreetingEnhance.prototype = {
  name: PropTypes.string.isRequired,
};
export default GreetingEnhance;
