// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slice/theme'
import languageReducer from './slice/languageslice'; // Import your language slice reducer

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  // Add other slice reducers here if needed
});

export default rootReducer;