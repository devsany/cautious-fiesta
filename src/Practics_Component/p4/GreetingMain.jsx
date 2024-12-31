import React, { useState } from "react";
import PropTypes from "prop-types";
const GreetingMain = ({ name }) => {
  const [displayValue, SetDisplayValue] = useState(`hello my name is ${name}`);
  const handleShow = () => {
    SetDisplayValue(`hii I am ${name}`);
  };
  return (
    <div>
      <h2>Greeting Main</h2>
      <div>
        {/*Display initial Value */}
        {displayValue}
      </div>
      {/* button */}
      <div>
        <button onClick={handleShow}>Show</button>
      </div>
    </div>
  );
};

GreetingMain.prototype = {
  name: PropTypes.string.isRequired,
};

export default GreetingMain;
