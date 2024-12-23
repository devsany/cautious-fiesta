import React from "react";

const Input = () => {
  return (
    <div>
      <h1>Main Form</h1>
      <h2>Section 1</h2>
      <span title="myName">my name is sunny raj</span>

      <header>
        <span data-testid="this_is_the_heading_section">Heading Present</span>
      </header>
      <form action="">
        <label htmlFor="name">what is your name </label>
        <input
          type="text"
          name="name"
          id="name"
          value="Sunny"
          placeholder="Enter your name"
          required
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
