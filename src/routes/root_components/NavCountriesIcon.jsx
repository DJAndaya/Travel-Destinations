import React from "react"
// material UI imports
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// router imports
import { NavLink } from "react-router-dom";

const NavCountriesIcon = () => {
  return (
    <ListItem key={"Countries"} disablePadding sx={{ display: 'block' }}>
      <NavLink to={"/"} className={({ isActive, isPending}) =>
        isActive
          ? "active"
          : isPending
            ? "pending"
            : "text-white mr-4"
      }>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary={"Countries"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}

export default NavCountriesIcon