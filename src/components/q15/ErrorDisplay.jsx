import React from "react";

function ErrorDisplay({ error }) {
  return <div>{error ? <p data-testid="error-message">{error}</p> : null}</div>;
}

export default ErrorDisplay;
