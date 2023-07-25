// YourComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slice/languageslice';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div>
      Current language: {language}
      <button onClick={() => handleLanguageChange('en')}>Switch to English</button>
      <button onClick={() => handleLanguageChange('fr')}>Switch to French</button>
    </div>
  );
};

export default LanguageSelector;
