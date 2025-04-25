
import { useColorScheme } from '@mui/material/styles'
// import * as React from 'react'
import Box from '@mui/material/Box'

import FormControl from '@mui/material/FormControl'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

export function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  const handleChange = (event) => {
    setMode(event.target.value) // Cập nhật chế độ chủ đề
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={mode}
        label="Theme"
        onChange={handleChange}
      >
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon />
              system
          </div>
        </MenuItem>
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />
              Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon />
              Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
