import React, { useState } from "react"
// material UI imports
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';

const VisitedButtonIcon = ({ country, countryUserData, setCountryUserData }) => {

  const inAlreadyVisitedList = countryUserData.alreadyVisited.find((favorite) => favorite === country) !== undefined 

  const addCountryToVisitedButton = (country) => {
    if (!inAlreadyVisitedList) {
      setCountryUserData({
        ...countryUserData,
        alreadyVisited: [...countryUserData.alreadyVisited, country]
      })
    } else {
      const filteredAlreadyVisitedCountries = countryUserData.alreadyVisited.filter((alreadyVisitedCountry) => {
        return alreadyVisitedCountry !== country
      })
      setCountryUserData({
        ...countryUserData,
        alreadyVisited: filteredAlreadyVisitedCountries
      })
    }
  }

  if (inAlreadyVisitedList) {
    return (
      <Tooltip title="Already visited" placement="top">
        <Button size="small" onClick={()=> addCountryToVisitedButton(country)}>
          <CheckCircleIcon color="success"/>
        </Button>  
      </Tooltip>
    )
  } else {
    return (
      <Tooltip title="Haven't visited" placement="top">
        <Button size="small" onClick={()=> addCountryToVisitedButton(country)}>
          <CheckCircleOutlineIcon />
        </Button>  
      </Tooltip>
    )
  }
}

export default VisitedButtonIcon