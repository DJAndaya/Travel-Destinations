import React, { useState } from "react"
// material UI imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// redux imports
import countriesApi from "../redux/countriesApi";

const { useGetCountriesQuery } = countriesApi

const SearchBar = ({ searchBarValue, setSearchBarValue }) => {
  
  const { data, isLoading } = useGetCountriesQuery()

  let dataSorted = [...data]
  if (isLoading) {
    return <div>...Loading</div>
  } else {
    dataSorted = dataSorted.sort((a,b)=> a.name.common.localeCompare(b.name.common))
    // console.log(data)
    const countryNames = dataSorted.map((country)=> {
      return country.name.common
    })
    return (
        <div>
        <Autocomplete
            value={searchBarValue}
            onChange={(event, newValue) => {
            setSearchBarValue(newValue);
            }}
            id="controllable-states-demo"
            options={countryNames}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search here" />}
        />
        </div>
    );
  }
}

export default SearchBar