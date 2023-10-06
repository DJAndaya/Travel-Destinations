import { createSlice } from "@reduxjs/toolkit"

const visitedCountriesSlice = createSlice({
  name: "visitedCountries",
  initialState: [],
  reducers: {
    addCountryToVisited: (state, action) => {
      // console.log ("I'm working")
      state.push(action.payload)
    },
    removeCountryFromVisited: (state, action) => {
      // console.log("I'm still working")
      // console.log(action.payload)
      // console.log(state)
      state = state.filter((visitedCountry) => {
        visitedCountry !== action.payload
      })
      return state
    }
  }
})

export default visitedCountriesSlice