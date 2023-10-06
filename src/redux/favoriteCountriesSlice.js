import { createSlice } from "@reduxjs/toolkit"
import favoriteCountries from "./store"

const favoriteCountriesSlice = createSlice({
  name: "favoriteCountries",
  initialState: [],
  reducers: {
    addCountryToFavorite: (state, action) => {
      // console.log ("I'm working")
      const { name } = action.payload
      console.log(action.payload)
      state.push(action.payload)
      // console.log(state)
    },
    removeCountryFromFavorite: (state, action) => {
      // console.log("I'm still working")
      // console.log(state)
      // const filteredState = state.filter((favoriteCountry) => {
      //   action.payload !== favoriteCountry
      // })
      // return{
      //   ...state,
      //   filteredState
      // }
      // console.log(filteredState)
      // return filteredState
      // console.log(state)
      // return (
      //   state.filter((favoriteCountry) => {
      //     return action.payload !== favoriteCountry
      //   })
      // )
      // console.log(state.entities)
      // const filterState = () => {
        
      // }
      // state = state.pop()
      // const country = action.payload
      // console.log(country)
      // state = state.filter(favoriteCountry => console.log(favoriteCountry))
      //   console.log(action.payload)
      //   console.log(favoriteCountry)
      // console.log()
        // return country !== favoriteCountry
      // return filteredState
      // console.log(state)
    }
  }
})

export default favoriteCountriesSlice

