// Can you verify if default values are displayed when no props are provided?
import React from "react";

const Q3 = ({ title = "Section-1" }) => {
  return (
    <div>
      <h1>Job Application Form</h1>
      <div>
        <span>Title:-{title}</span>
      </div>
    </div>
  );
};

export default Q3;
