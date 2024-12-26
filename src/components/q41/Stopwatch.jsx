import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
    }
  };

  const stopTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setMilliseconds(0);
    setIsActive(false);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, milliseconds]);
  };

  return (
    <div className="stopwatch">
      <p>Elapsed Time: {(milliseconds / 1000).toFixed(1)} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={recordLap}>Lap</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {(lap / 1000).toFixed(1)} seconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;
   