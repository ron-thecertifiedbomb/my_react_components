import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  const progressStyle = {
    width: `${percentage}%`,
    backgroundColor: "orange",
  };

  return (
    <div className="bar-container">
      <div className="progress-bar">
        <div className="progress" style={progressStyle}></div>
      </div>
      {percentage}%
    </div>
  );
};

export default ProgressBar;
