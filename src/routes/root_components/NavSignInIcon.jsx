import React from "react"
// material UI imports
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
// router imports
import { NavLink } from "react-router-dom";

const NavSignInIcon = () => {
  return (
    <ListItem key={"Sign In"} disablePadding sx={{ display: 'block' }}>
      <NavLink to={"/signin"} className={({ isActive, isPending}) =>
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
            <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
          </ListItemIcon>
          <ListItemText primary={"Sign In"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}

export default NavSignInIcon