// src/components/Message.js
import React from "react";

const Message = ({ loggedIn }) => {
  return <div>{loggedIn ? "Hello, User!" : "Please Log In"}</div>;
};

export default Message;
