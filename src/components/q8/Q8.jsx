// Can you check if a dropdown menu displays the correct options when clicked?

import React, { useState } from "react";

const Q8 = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      <h2>Business Expend Form</h2>
      <label htmlFor="select-country">Select Country</label>
      <select
        name="select-country"
        id="select-country"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Value</option>
        <option value="IND">India</option>
        <option value="USA">USA</option>
        <option value="UAE">UAE</option>
      </select>
      <h3>{country ? country : null}</h3>
    </div>
  );
};

export default Q8;
