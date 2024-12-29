import React from "react";
import LowerOrderComponent from "./LowerOrderComponent";
const HigherOrderComponent = () => {
  return (
    <div>
      <LowerOrderComponent>my name is sunny</LowerOrderComponent>
    </div>
  );
};

export default HigherOrderComponent;
