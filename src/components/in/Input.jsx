import React from "react";

const Input = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">what is your name </label>
        <input
          type="text"
          name="name"
          id="name"
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
