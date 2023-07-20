import React, { useState, useEffect } from 'react';
import './Clock.css'

const Clock = ({ getTime }) => {

  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000); // Update the time every 1000 milliseconds (1 second)

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, [getTime]);

  return (

    <div className="clock-card">
      <div className="clock-content">
        <h2 className="clock-time">{currentTime}</h2>
      </div>
    </div>
  );
  
};

export default Clock;
