import React from "react"
// imports from materialUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
// imports from other components
import FavoriteButtonIcon from "./FavoriteButtonIcon";
import VisitedButtonIcon from "./VisitedButtonIcon";
// imports from redux
import favoriteCountriesSlice from "../redux/favoriteCountriesSlice"; 

const CountryCards = ({ country, countryUserData, setCountryUserData }) => {
  // console.log(counr)
 
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {country.name.common}
          </Typography>
      </CardContent>
      <CardActions>
        <FavoriteButtonIcon country={country} countryUserData={countryUserData} setCountryUserData={setCountryUserData} />
        <VisitedButtonIcon country={country} countryUserData={countryUserData} setCountryUserData={setCountryUserData} />
      </CardActions>
    </Card>
    </div>
  )

}

export default CountryCards
