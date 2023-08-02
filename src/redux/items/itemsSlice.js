import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import main100Cities from './main100Cities.js';

const initialState = {
  items: [],
  rejected: false,
  error: false,
  filteredItems: []
};

const GEOCODEAPIENDPOINT = 'http://api.openweathermap.org/geo/1.0/direct?';
const CITIESAIRPOLLUTIONENDPOINT = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const WEATHERAPIKEY = "bb97736519c9fc5db2374f27ed914c13";

const geoCode = async (city) => {
  try {
    const response = await fetch(`${GEOCODEAPIENDPOINT}q=${city}&appid=${WEATHERAPIKEY}`);
    const data = await response.json();
    return { city, country: data[0].country, lat: data[0].lat, lon: data[0].lon };
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
    const mainCitiesWorldwideData = await Promise.all(main100Cities.map((city) => citiesAirQuality(city)));
    return mainCitiesWorldwideData;
  } catch (error) {
    throw Error(error);
  }
});

const itemsSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const { input } = action.payload;
      console.log(input);//this value is right
      if (input.trim() === '') {
        state.filteredItems = [];
      } else {
        state.filteredItems = state.items.filter((city) =>
          city.city.toLowerCase().includes(input.trim().toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchItems.pending, (state, action) => {
      state.rejected = false;
      state.error = false;
    })    
    .addCase(fetchItems.fulfilled, (state, action) => {
      const mainCitiesWorldwideData = action.payload;
      mainCitiesWorldwideData.forEach((cityData, index) => {
        const cityObject = {
          id: index,
          city: main100Cities[index],
          components: cityData.list[0].components
        };
        state.items.push(cityObject);
      });
    })
    .addCase(fetchItems.rejected, (state, action) => {
      state.rejected = true;
      state.error = true;
    }
    );   
  },
});

export const { filterItems } = itemsSlice.actions;
export default itemsSlice.reducer;
