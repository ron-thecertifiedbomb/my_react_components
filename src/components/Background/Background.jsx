import React, { useState, useEffect } from 'react';
import './Background.css';

const Background = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="background">
      {images.map((_, index) => (
        <div
          key={index}
          className={`bg-image ${index === currentIndex ? 'visible' : ''}`}
          style={{
            backgroundImage: `url(${images[index]})`,
            opacity: index === currentIndex ? 1 : 0, // Set opacity to 1 for current image, 0 for others
            transition: 'opacity 1s ease-in-out', // Always use the fade transition
          }}
        ></div>
      ))}
    </section>
  );
};

export default Background;
