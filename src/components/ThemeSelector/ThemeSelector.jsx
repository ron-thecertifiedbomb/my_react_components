// YourComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/slice/theme';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const handleThemeChange = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  return (
    <div>
      Current theme: {theme}
      <button onClick={() => handleThemeChange('dark')}>Switch to Dark Theme</button>
      <button onClick={() => handleThemeChange('light')}>Switch to Light Theme</button>
    </div>
  );
};

export default ThemeSelector;
