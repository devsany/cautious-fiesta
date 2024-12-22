import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
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
