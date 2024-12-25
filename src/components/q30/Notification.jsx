import React, { useState } from "react";

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const dismissNotification = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={dismissNotification}>Dismiss</button>
    </div>
  );
};

export default Notification;
