import React, { useState, useRef } from "react";

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(3000);
  const [isActive, setIsActive] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsWorkSession(true);
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setIsWorkSession(!isWorkSession);
            return isWorkSession ? 300 : 3000;
          }
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIsWorkSession(false);

    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    setIsWorkSession(false);

    clearInterval(intervalRef.current);
    setSeconds(isWorkSession ? 3000 : 300);
    setIsActive(false);
  };

  return (
    <div className="pomodoro-timer">
      <p>
        {isWorkSession ? "Work" : "Break"} Time: {Math.floor(seconds / 60)}:
        {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;
