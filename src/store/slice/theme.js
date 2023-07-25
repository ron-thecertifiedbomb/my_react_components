// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'light', // Initial theme value
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
