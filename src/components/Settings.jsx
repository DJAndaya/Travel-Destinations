import React from "react"
// component imports
import FilterCheckBoxes from "./FilterCheckBoxes"
import Typography from '@mui/material/Typography';
// router imports
import { useOutletContext } from "react-router-dom";

const Settings = () => {

  const [[filterCheckBoxes, setFilteredCheckBoxes]] = useOutletContext()

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Settings
      </Typography>
      work in progress :)
      <FilterCheckBoxes filterCheckBoxes={filterCheckBoxes} setFilteredCheckBoxes={setFilteredCheckBoxes} />
    </>
  )
}

export default Settings