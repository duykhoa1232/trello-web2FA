import { useState } from 'react'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Check from '@mui/icons-material/Check'


export function Templates() {
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
      <Button
        id="basic-button-templates"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        started
      </Button>
      <Menu
        id="basic-menu-templates"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-templates'
        }}
      >
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
      Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}