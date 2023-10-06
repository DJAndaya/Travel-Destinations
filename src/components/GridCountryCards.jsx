import React from "react"
// imports from material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CountryCards from "./CountryCards"
import { useSelector } from "react-redux"

import countriesApi from "../redux/countriesApi";

const { useGetCountriesQuery, useGetCountriesByNameQuery } = countriesApi

const GridCountryCards = ({ countryUserData, setCountryUserData, searchBarValue, filterCheckBoxes }) => {

  // console.log(favoriteCountries)
  // console.log(searchBarValue)
  const { data, isLoading, isError, isSuccess } = useGetCountriesQuery()
  // console.log(data)

  let dataSorted = [...data]
  if (isLoading) {
    return <h1>loading...</h1>
  } else {

    dataSorted = dataSorted.sort((a,b)=> a.name.common.localeCompare(b.name.common))

    if (filterCheckBoxes.filterShowPlanToVisit) {
      dataSorted = dataSorted.filter((countries) => {
        return countryUserData.planToVisit.includes(countries)
      })
    }

    if (filterCheckBoxes.filterShowAlreadyVisited) {
      dataSorted = dataSorted.filter((countries) => {
        return countryUserData.alreadyVisited.includes(countries)
      })
    }
    
    if (filterCheckBoxes.filterHideNoPlanToVisit) {
      dataSorted = dataSorted.filter((countries) => {
        return !countryUserData.noPlanToVisit.includes(countries)
      })
    }

    if (filterCheckBoxes.filterHideAlreadyVisited) {
      dataSorted = dataSorted.filter((countries) => {
        return !countryUserData.alreadyVisited.includes(countries)
      })
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dataSorted.map((country, idx) => {
              if (country.name.common === searchBarValue) {
                return (
                  <Grid xs={2} sm={2} md={2} key={idx}>
                    <CountryCards country={country} countryUserData={countryUserData} setCountryUserData={setCountryUserData} />
                  </Grid>
                )
              } else if (!searchBarValue) {
                  return (
                  <Grid xs={2} sm={2} md={2} key={idx}>
                    <CountryCards country={country} countryUserData={countryUserData} setCountryUserData={setCountryUserData} />
                  </Grid>
                )
              }
            })}
        </Grid>
      </Box>
    )
  }  
}

export default GridCountryCards