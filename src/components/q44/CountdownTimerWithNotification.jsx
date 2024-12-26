import React, { useState, useRef } from "react";

const CountdownTimerWithNotification = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsCompleted(false);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setIsCompleted(true);
            return 0;
          }
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(initialSeconds);
    setIsActive(false);
    setIsCompleted(false);
  };

  return (
    <div className="countdown-timer">
      <p>Remaining Time: {seconds} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      {isCompleted && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimerWithNotification;