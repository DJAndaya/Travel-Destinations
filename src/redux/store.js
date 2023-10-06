import { configureStore } from "@reduxjs/toolkit";
import favoriteCountriesSlice from "./favoriteCountriesSlice";
import favoriteCountriesMapSlice from "./favoriteCountriesMapSlice";
import visitedCountriesSlice from "./visitedCountriesSlice";
import countriesApi from "./countriesApi";
import filterCheckBoxesSlice from "./filterCheckBoxes";

const store = configureStore({
  reducer: {
    // favoriteCountriesMap: favoriteCountriesMapSlice.reducer,
    favoriteCountries: favoriteCountriesSlice.reducer,
    visitedCountries: visitedCountriesSlice.reducer,
    countriesApi: countriesApi.reducer,
    filterCheckBoxes: filterCheckBoxesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(countriesApi.middleware)
  }
})

export default store

window.store = store