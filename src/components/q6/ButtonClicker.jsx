// Can you test if a button click triggers the expected function?
import React from "react";

const ButtonClicker = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default ButtonClicker;
