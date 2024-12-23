// Can you verify if an input field updates its value on user input?

import React, { useState } from "react";

const InputUpdate = () => {
  const [placeName, setPlaceName] = useState("");
  const [toggle, setToggle] = useState(false); 
  const handleClick = () => {
    setToggle(true);
  };
  return (
    <div>
      <h2>Tour & Travel Form</h2>
      <div>
        <input
          type="text"
          placeholder="Enter place name"
          value={placeName}
          required
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
        {toggle ? placeName : null}
      </div>
    </div>
  );
};

export default InputUpdate;
