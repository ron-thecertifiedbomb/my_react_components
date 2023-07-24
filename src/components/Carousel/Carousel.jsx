import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );

  const ImageSlide = ({ url, titles }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
    };

    return (
      <div className="image-slide" style={styles}>
        {titles && titles.length > 0 ? (
          <div className="image-titles">
            {titles.map((title, index) => (
              <button key={index} className="title-button" style={{ display: 'none' }}>
                {title}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const titles = [['Mustang'], ['Ford'], ['Toyota']];

  const Dots = ({ images, currentImageIndex, handleDotClick }) => (
    <div className="dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={currentImageIndex === index ? 'dot active' : 'dot'}
          onClick={() => handleDotClick(index)}
        ></span>
      ))}
    </div>
  );

  // Auto-advance to the next slide after a certain duration (in milliseconds)
  const autoAdvanceInterval = 2000; // 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoAdvanceInterval);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <Arrow direction="leftarrow" clickFunction={previousSlide} glyph={<SlArrowLeft size={18} color="white" />} />
      <ImageSlide url={images[currentImageIndex]} titles={titles[currentImageIndex]} />
      <Arrow direction="rightarrow" clickFunction={nextSlide} glyph={<SlArrowRight size={18} color="white" />} />
      <Dots images={images} currentImageIndex={currentImageIndex} handleDotClick={handleDotClick} />
    </div>
  );
};

export default Carousel;
