// Greeting.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Greeting = ({ name = "Everyone" }) => {
  const [greeting, setGreeting] = useState(`Hello, ${name}!`);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [selectedGreeting, setSelectedGreeting] = useState("Hello");

  const changeGreeting = () => {
    setGreeting(`${selectedGreeting}, ${name}!`);
  };

  const updateName = () => {
    if (newName.trim() === "") {
      setError("Name cannot be empty");
    } else {
      setGreeting(`${selectedGreeting}, ${newName}!`);
      setError("");
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleGreetingChange = (event) => {
    const newGreeting = event.target.value;
    setSelectedGreeting(newGreeting);
    setGreeting(`${newGreeting}, ${name}!`);
  };

  return (
    <div>
      {isVisible && <h1>{greeting}</h1>}
      <select value={selectedGreeting} onChange={handleGreetingChange}>
        <option value="Hello">Hello</option>
        <option value="Hi">Hi</option>
        <option value="Greetings">Greetings</option>
        <option value="Welcome">Welcome</option>
      </select>

      <input
        type="text"
        placeholder="Enter a new name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={updateName}>Update Name</button>
      <button onClick={changeGreeting}>Change Greeting</button>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Greeting" : "Show Greeting"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
