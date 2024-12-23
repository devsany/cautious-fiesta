import React from "react";

function ConditionalRender({ isVisible }) {
  return (
    <div>
      {isVisible ? (
        <p data-testid="visible-element">This element is visible</p>
      ) : null}
    </div>
  );
}

export default ConditionalRender;
