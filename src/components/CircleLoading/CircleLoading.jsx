import React, { useState, useEffect } from "react";
import "./CircleLoadingBar.css";

const CircleLoadingBar = ({ duration }) => {
  const [progress, setProgress] = useState(0);
  const targetProgress = 100;

  useEffect(() => {
    let progressInterval;

    const startProgressAnimation = () => {
      let currentProgress = 0;
      const increment = (targetProgress / (duration / 20));

      progressInterval = setInterval(() => {
        currentProgress = Math.min(currentProgress + increment, targetProgress);
        setProgress(currentProgress);

        if (currentProgress === targetProgress) {
          clearInterval(progressInterval);
        }
      }, 20);
    };

    startProgressAnimation();

    return () => clearInterval(progressInterval);
  }, [duration]);

  const circleStyle = {
    strokeDasharray: `${progress} ${100 - progress}`,
  };

  return (
    <div className="circle-progress-bar">
      <svg viewBox="0 0 100 100" className="circle">
        <circle cx="50" cy="50" r="45" style={circleStyle}></circle>
      </svg>
      <span className="progress-text">{`${Math.round(progress)}%`}</span>
    </div>
  );
};

export default CircleLoadingBar;
