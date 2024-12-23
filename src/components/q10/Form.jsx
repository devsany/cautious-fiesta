import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {
    setToggle(true);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </form>
      {toggle && (
        <div>
          {name && name} {email && email}
        </div>
      )}
    </div>
  );
};

export default Form;
