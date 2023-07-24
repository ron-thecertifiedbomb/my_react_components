import React, { useState, useEffect } from "react";
import "./LoadingBar.css";

const LoadingBar = ({ duration }) => {
  const [progress, setProgress] = useState(0);
  const targetProgress = 100;

  useEffect(() => {
    let progressInterval;

    const startProgressAnimation = () => {
      let currentProgress = 0; // Initialize currentProgress with 0
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

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%`, backgroundColor: "#26f600" }}></div>
      <span className="progress-text">{`${Math.round(progress)}%`}</span>
    </div>
  );
};

export default LoadingBar;
