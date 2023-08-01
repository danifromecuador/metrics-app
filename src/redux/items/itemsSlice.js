import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const GEOCODEAPIENDPOINT = 'http://api.openweathermap.org/geo/1.0/direct?';
const CITIESAIRPOLLUTIONENDPOINT = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const WEATHERAPIKEY = "bb97736519c9fc5db2374f27ed914c13";

const geoCode = async (city) => {
  try {
    const response = await fetch(`${GEOCODEAPIENDPOINT}q=${city}&appid=${WEATHERAPIKEY}`);
    const data = await response.json();
    return { country: data[0].countrym, lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    throw Error(error);
  }
}

const citiesAirQuality = async (city) => {
  try {
    const { lat, lon } = await geoCode(city);
    const response = await fetch(`${CITIESAIRPOLLUTIONENDPOINT}lat=${lat}&lon=${lon}&appid=${WEATHERAPIKEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
}

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  try {
    const data = await citiesAirQuality("quito");
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    });
  },
});

export default itemsSlice.reducer;


// Path: src/redux/items/itemsSlice.js