import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>Toggle Switch</h1>
      <h2>{isOn ? "ON" : "OFF"}</h2>
      <button onClick={handleToggle}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
};

export default ToggleSwitch;
