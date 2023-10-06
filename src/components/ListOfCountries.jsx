import React, { useState, useEffect } from "react"
// material UI imports
import Grid from '@mui/material/Grid';
// redux imports
import countriesApi from "../redux/countriesApi";
// component imports
import GridCountryCards from "./GridCountryCards";
import SearchBar from "./SearchBar";
import FilterCheckBoxes from "./filterCheckBoxes.jsx"
// router imports
import { useOutletContext } from "react-router-dom";

const { useGetCountriesQuery } = countriesApi

const ListOfCountries = ( props ) => {

  const { data, isLoading, isError, isSuccess } = useGetCountriesQuery()
  // const [countryUserData, setCountryUserData] = useState({
  //   planToVisit: [],
  //   noPlanToVisit: [],
  //   alreadyVisited: [],
  // })
  const [[filterCheckBoxes, setFilteredCheckBoxes], [countryUserData, setCountryUserData]] = useOutletContext()
  // console.log(filterCheckBoxes)
  const [searchBarValue, setSearchBarValue] = useState(null)

  if (isLoading) {
    return <div>...Loading</div>
  } else {
    return (
      <Grid container>
        <Grid container rowSpacing={2} columnSpacing={3} justifyContent="flex-start" alignItems="center" >
          <Grid item xs={3}>
            <h1>Countries</h1>
          </Grid>
          <Grid item xs={3}>
            <SearchBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} />
          </Grid>
          <Grid item xs={5}>
            <FilterCheckBoxes filterCheckBoxes={filterCheckBoxes} setFilteredCheckBoxes={setFilteredCheckBoxes} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <GridCountryCards countryUserData={countryUserData} setCountryUserData={setCountryUserData} searchBarValue={searchBarValue} filterCheckBoxes={filterCheckBoxes} />
        </Grid>
      </Grid>
    )
  }
}

export default ListOfCountries

/* OLD COLD

<GridCountryCards planToVisitCountries={planToVisitCountries} setPlanToVisitCountries={setPlanToVisitCountries} />
<GridFavoriteCountryCards planToVisitCountries={planToVisitCountries} setPlanToVisitCountries={setPlanToVisitCountries} />

*/