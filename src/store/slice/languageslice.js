// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'en', // Initial language value
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
