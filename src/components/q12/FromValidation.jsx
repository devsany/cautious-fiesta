import React, { useState } from "react";

const FromValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState({});
  const handleClick = () => {
    const error = {};
    if (!name) {
      error.name = "Required";
    } else if (!email) {
      error.email = "required";
    }
    setToggle(true);
    setError(error);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>{error.name && error.name}</div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>{error.email && error.email}</div>
        <button onClick={handleClick}>Submit</button>
      </form>
      <div>
        {toggle && (
          <div>
            {name} {email}
          </div>
        )}
      </div>
    </div>
  );
};

export default FromValidation;
