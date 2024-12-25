import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
    setButtonSubmit(true);
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          data-testid="username"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          data-testid="password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      <div>
        {buttonSubmit && (
          <>
            {username} {password}
          </>
        )}{" "}
      </div>
    </form>
  );
};

export default LoginForm;
