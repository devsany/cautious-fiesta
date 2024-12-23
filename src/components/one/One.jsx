import React from "react";

const One = () => {
  return (
    <div>
      <h1>Fill the all corresponding form</h1>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form action="">
        <div>
          <label htmlFor="name">Enter your name</label>
          <input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="country">Enter country name</label>
          <select name="country" id="country">
            <option value="">Select Country</option>
            <option value="IND">India</option>
            <option value="USA">USA</option>
            <option value="UAE">UAE</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">
            Gender
            <input id="gender" type="checkbox" />
          </label>
        </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="Enter your address" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default One;
