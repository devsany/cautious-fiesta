import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Enter your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="job-location">
            <select name="" id="job-location">
              <option value="">Select a Country</option>
              <option value="IN">Select a INDIA</option>
              <option value="US">Select a USA</option>
              <option value="UE">Select a UAE</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" id="terms" /> I agree to the terms and
            condition
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
