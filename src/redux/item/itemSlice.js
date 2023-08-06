import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
