import React, { useState, useEffect } from 'react';

const TextShuffle = () => {
  const [currentString, setCurrentString] = useState('');
  const [casing, setCasing] = useState(0);

  const randChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S'];
  const chars = randChars.length;

  const randomString = () => {
    let str = '';
    for (let i = 0; i < currentString.length; ++i) {
      let char = randChars[Math.floor(Math.random() * chars)];
      if (casing === 2) char = char.toLowerCase();
      str += char;
    }
    return str;
  };

  useEffect(() => {
    setCurrentString(randChars[Math.floor(Math.random() * chars)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentString(randomString());
    }, 2000); // Adjust the interval speed as desired

    return () => clearInterval(interval);
  }, [casing]);

  return <div id="container">{casing === 0 ? currentString : casing === 1 ? currentString.toUpperCase() : currentString.toLowerCase()}</div>;
};

export default TextShuffle;
