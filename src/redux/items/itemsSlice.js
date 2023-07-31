import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const fetchDataAsync = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error) {
    throw Error(error);
  }
};

export const fetchItems = createAsyncThunk("items/fetchItems", fetchDataAsync);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
  },
});

export default itemsSlice.reducer;

// Path: src/redux/items/itemsSlice.js