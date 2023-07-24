import React, { useState, useEffect } from "react";
import "./Text.css";

const Text = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds

    const animationInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, animationDuration / 2);
    }, animationDuration);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="text-animation">
      <div className="text-container"> {/* Add the text container */}
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text ${index === currentTextIndex && isVisible ? "visible" : ""}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Text;
