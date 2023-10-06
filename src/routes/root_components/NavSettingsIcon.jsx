import React from "react"
// material UI imports
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
// router imports
import { NavLink } from "react-router-dom";

const NavSettingsIcon = () => {
  return (
    <ListItem key={"Settings"} disablePadding sx={{ display: 'block' }}>
      <NavLink to={"/settings"} className={({ isActive, isPending}) =>
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
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}

export default NavSettingsIcon