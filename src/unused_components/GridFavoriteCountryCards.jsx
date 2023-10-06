import React from "react"
// imports from material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CountryCards from "../components/CountryCards"
import { useSelector } from "react-redux"

import countriesApi from "../redux/countriesApi";

const { useGetCountriesQuery, useGetCountriesByNameQuery } = countriesApi

const GridFavoriteCountryCards = ({ countryUserData, setCountryUserData }) => {

  // console.log(favoriteCountries)
  const planningToVisit = countryUserData
  const { data, isLoading, isError, isSuccess } = useGetCountriesQuery()
  // console.log(data)

  let dataSorted = [...countryUserData.planToVisit]
  if (isLoading) {
    return <h1>loading...</h1>
  } else {
    dataSorted = dataSorted.sort((a,b)=> a.name.common.localeCompare(b.name.common))
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dataSorted.map((country, idx) => {
              return (
                <Grid xs={2} sm={2} md={2} key={idx}>
                  <CountryCards country={country} countryUserData={countryUserData} setCountryUserData={setCountryUserData} />
                </Grid>
              )
            })}
        </Grid>
      </Box>
    )
  }  
}

export default GridFavoriteCountryCards