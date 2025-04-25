import { useState } from 'react'
import { Box, Menu, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider'

import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import ListItemIcon from '@mui/material/ListItemIcon'

import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'


export function Profile() {
  const [anchorEl, setAnchorEl] = useState(null) // Removed TypeScript-specific syntax
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget) // Set the anchor element for the menu
  }

  const handleClose = () => {
    setAnchorEl(null) // Close the menu
  }

  return (
    <Box>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src='https://qc-static.coccoc.com/a-images/067/625/067625a60fb3f5610e95c2be2e92b0f4a5eb52302d94d8a694466b3fc48fc8b9.jpg' alt='KhoaDev' sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width:28, height:28, mr:2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width:28, height:28, mr:2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
      Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
      Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
      Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}