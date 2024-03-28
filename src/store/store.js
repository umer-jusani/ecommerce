import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../components/Header/locationSlice/locationSlice";

const Store = configureStore({
  reducer: {
    locationSlice: locationSlice,
  },
});

export default Store;
