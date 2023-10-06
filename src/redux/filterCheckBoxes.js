import { createSlice } from "@reduxjs/toolkit";

const filterCheckBoxesSlice = createSlice({
  name: "filterCheckBoxes",
  initialState: {
    checkBoxShowPlanToVisit: true,
    checkBoxShowAlreadyVisited: false,
    checkBoxHideNoPlanToVisit: false,
    checkBoxHideAlreadyVisited: false,
  },
  reducers: {
    filterShowPlanToVisit: (state, action) => {
      return {
        ...state,
        checkBoxShowPlanToVisit: action.payload
      }
    },
    filterShowAlreadyVisited: (state, action) => {
      return {
        ...state,
        checkBoxShowAlreadyVisited: action.payload
      }
    },
    filterHideNoPlanToVisit: (state, action) => {
        return {
          ...state,
          checkBoxHideNoPlanToVisit: action.payload
        }
      },
    filterHideAlreadyVisited: (state, action) => {
      return {
        ...state,
        checkBoxHideAlreadyVisited: action.payload
      }
    },
  }
})

export default filterCheckBoxesSlice