import React, { useState, useRef } from "react";

const StopwatchWithLapSplit = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const [splits, setSplits] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
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
    setMilliseconds(0);
    setIsActive(false);
    setLaps([]);
    setSplits([]);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, milliseconds]);
  };

  const recordSplit = () => {
    setSplits((prevSplits) => [...prevSplits, milliseconds]);
  };

  return (
    <div className="stopwatch">
      <p>Elapsed Time: {(milliseconds / 1000).toFixed(1)} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={recordLap}>Lap</button>
      <button onClick={recordSplit}>Split</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {(lap / 1000).toFixed(1)} seconds</li>
        ))}
      </ul>
      <ul>
        {splits.map((split, index) => (
          <li key={index}>Split {index + 1}: {(split / 1000).toFixed(1)} seconds</li>
        ))}
      </ul>
    </div>
  );
};

export default StopwatchWithLapSplit;