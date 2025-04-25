import { Box, Typography } from '@mui/material'
import { ModeSelect } from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloIcon from '~/assets/trello.svg' // Import SVG as a file
import { Workspace } from './Menus/WorksSpace' // Import Workspace component
import { Recent } from './Menus/Recent'
import { Strared } from './Menus/Stared' // Import Recent component
import { Templates } from './Menus/Templates'
import TextField from '@mui/material/TextField'

import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'
import { Profile } from './Menus/Profile'


export function AppBar() {
  return (
    <Box
      px={2}
      sx={(theme) => ({
        display: 'flex',
        width: '100%',
        height: theme.trello.appHeaderHeight, // Access custom theme property
        alignItems: 'center',
        justifyContent: 'space-between'
      })}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsIcon
          sx={{
            color: 'primary.main' // Access theme.palette
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <img
            src={trelloIcon}
            alt="Trello Icon"
            style={{
              width: '32px', // Set a fixed width for the icon
              height: '32px'
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Trello
          </Typography>

          <Workspace />
          <Recent />
          <Strared />
          <Templates />
          <Button variant="outlined">Create</Button>

        </Box>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search field" size='small' type="search..." />

        <ModeSelect />
        <Tooltip title="Notifications" sx={{ cursor:'pointer' }} >
          <Badge color="secondary" variant="dot">
            <CircleNotificationsIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor:'pointer' }} >
          <Badge color="secondary" variant="dot">
            <HelpIcon />
          </Badge>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}
