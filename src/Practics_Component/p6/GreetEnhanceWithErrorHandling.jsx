import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetEnhanceWithErrorHandling = ({ name }) => {
  const [dispalyValue, setDisplayValue] = useState(`hii my name is ${name}`);
  const [greet, setGreet] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    if (!greet) {
      setError("Require");
    } else {
      setError("");
      setDisplayValue(greet);
    }
  };
  return (
    <div>
      <div>
        <h2>GreetEnhanceWithErrorHandling</h2>
      </div>
      {/* greeting message */}
      <div>{dispalyValue}</div>
      <div>
        <input
          type="text"
          placeholder="Enter greet"
          value={greet}
          onChange={(e) => setGreet(e.target.value)}
        />
        {/* Error handling */}
        <div>{error}</div>
      </div>
      {/* button when click input greet message appear  */}
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};
GreetEnhanceWithErrorHandling.prototype = {
  name: PropTypes.string.isRequired,
};

export default GreetEnhanceWithErrorHandling;
