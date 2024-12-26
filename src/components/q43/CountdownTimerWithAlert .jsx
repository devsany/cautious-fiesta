import React, { useState, useRef } from "react";

const CountdownTimerWithAlert = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsActive(false);
            alert("Time up!");
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
  };

  return (
    <div className="countdown-timer">
      <p>Remaining Time: {seconds} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownTimerWithAlert;
