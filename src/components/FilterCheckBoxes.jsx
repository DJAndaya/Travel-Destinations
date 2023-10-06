import React from "react"
// material UI imports
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// redux imports

const FilterCheckBoxes = ({ filterCheckBoxes, setFilteredCheckBoxes }) => {

  const filterShowPlanToVisit = (event) => {
    setFilteredCheckBoxes({
        ...filterCheckBoxes,
        filterShowPlanToVisit: event.target.checked
    });
    // console.log(filterCheckBoxes)
  };

  const filterShowAlreadyVisited = (event) => {
    setFilteredCheckBoxes({
        ...filterCheckBoxes,
        filterShowAlreadyVisited: event.target.checked
    });
    // console.log(filterCheckBoxes)
  };

  const filterHideNoPlanToVisit = (event) => {
    setFilteredCheckBoxes({
        ...filterCheckBoxes,
        filterHideNoPlanToVisit: event.target.checked
    });
    // console.log(filterCheckBoxes)
  };
  
  const filterHideAlreadyVisited = (event) => {
    setFilteredCheckBoxes({
        ...filterCheckBoxes,
        filterHideAlreadyVisited: event.target.checked
    });
    // console.log(filterCheckBoxes)
  };

  return (
    <FormGroup aria-label="position" row>
      <FormControlLabel
          value="start"
          control={
            <Checkbox
            checked={filterCheckBoxes.filterShowPlanToVisit}
            onChange={filterShowPlanToVisit}
            inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Show only countries plan to visit"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={
            <Checkbox
            checked={filterCheckBoxes.filterShowAlreadyVisited}
            onChange={filterShowAlreadyVisited}
            inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Show only countries visited"
          labelPlacement="start"
        />
      <FormControlLabel
          value="start"
          control={
            <Checkbox
            checked={filterCheckBoxes.filterHideNoPlanToVisit}
            onChange={filterHideNoPlanToVisit}
            inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Hide Countries with No Plans To Visit"
          labelPlacement="start"
        />
      <FormControlLabel
          value="start"
          control={
            <Checkbox
              checked={filterCheckBoxes.filterHideAlreadyVisited}
              onChange={filterHideAlreadyVisited}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Hide Countries Already Visited"
          labelPlacement="start"
        />
    </FormGroup>
  );
}

export default FilterCheckBoxes
