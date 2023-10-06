import React from "react"
// material UI imports
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Tooltip from '@mui/material/Tooltip';

const FavoriteButtonIcon = ({ country, countryUserData, setCountryUserData }) => {

  const inPlanToVisitList = countryUserData.planToVisit.find((favorite) => favorite === country) !== undefined 
  const inNoPlanToVisitList = countryUserData.noPlanToVisit.find((favorite) => favorite === country) !== undefined 

  const addCountryToFavoriteButton = (country) => {
    // console.log(country)
    if (!inPlanToVisitList && !inNoPlanToVisitList) {
      // console.log("hi")
      setCountryUserData({
        ...countryUserData,
        planToVisit: [...countryUserData.planToVisit, country]
      })
    } else if (inPlanToVisitList && !inNoPlanToVisitList) {

      const filteredFavoritedCountries = countryUserData.planToVisit.filter((planToVisitCountry) => {
        return planToVisitCountry !== country
      })
      setCountryUserData({
        ...countryUserData,
        planToVisit: filteredFavoritedCountries,
        noPlanToVisit: [...countryUserData.noPlanToVisit, country]
      })  
      // console.log(planToVisitCountries)
    } else {
      // console.log(planToVisitCountries)
      const filteredNotFavoriteCountries = countryUserData.noPlanToVisit.filter((noPlanToVisitCountry) => {
        return noPlanToVisitCountry !== country
      })
      // console.log(filteredFavoritedCountries)
      setCountryUserData({
        ...countryUserData,
        noPlanToVisit: filteredNotFavoriteCountries})
      // console.log(planToVisitCountries)
    }
  }

  if (inPlanToVisitList) {
    return (
      <Tooltip title="Plan to visit" placement="top">
        <Button size="small" onClick={()=> addCountryToFavoriteButton(country)}>
          <FavoriteIcon color="secondary"/>
        </Button>
      </Tooltip>
    )
  } else if (inNoPlanToVisitList) {
    return (
      <Tooltip title="No plans to visit" placement="top">
        <Button size="small" onClick={()=> addCountryToFavoriteButton(country)}>
          <NotInterestedIcon color="disabled" />
        </Button>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip title="Plan to visit?" placement="top">
        <Button size="small" onClick={()=> addCountryToFavoriteButton(country)}>
          <FavoriteBorderIcon />
        </Button>
      </Tooltip>
    )
  }
}

export default FavoriteButtonIcon


/* NOTES FOR ERRORS

- first button pressed does not change icon
- after pressing an icon that has already changed, all of them get removed from favorite list and reset icon

*/

/* OLD CODE

const filteredNotFavoriteCountries = countryUserData.noPlanToVisit.filter((noPlanToVisitCountry) => {
  return noPlanToVisitCountry !== country
})

*/