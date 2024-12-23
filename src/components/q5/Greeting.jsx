import React from "react";

const Greeting = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
    </div>
  );
};

export default Greeting;
