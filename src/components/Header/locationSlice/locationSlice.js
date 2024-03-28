import { createSlice } from "@reduxjs/toolkit";

const setCountry = async (state) => {
  // pushing data into country state
  state.locationData?.forEach((ele) => {
    const { country } = ele;
    state.country.push(country);
  });
};

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationData: [],
    country: [],
  },
  reducers: {
    setLocationData(state, action) {
      state.locationData = action.payload;

      setCountry(state);
    },
  },
});

export const { setLocationData } = locationSlice.actions;

export default locationSlice.reducer;
