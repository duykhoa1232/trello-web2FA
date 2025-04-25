import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
// import * as React from 'react'
import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Container } from '@mui/material'
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

// export function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   if (!mode) {
//     return null
//   }
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3
//       }}
//     >
//       <FormControl>
//         <FormLabel id="demo-theme-toggle">Theme</FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-theme-toggle"
//           name="theme-toggle"
//           row
//           value={mode}
//           onChange={(event) => setMode(event.target.value)}
//         >
//           <FormControlLabel value="system" control={<Radio />} label="System" />
//           <FormControlLabel value="light" control={<Radio />} label="Light" />
//           <FormControlLabel value="dark" control={<Radio />} label="Dark" />
//         </RadioGroup>
//       </FormControl>
//     </Box>
//   )
// }

function App() {
  
  return (
    <Container disableGutters maxWidth="{false}" sx={{ height: '100vh' }}>
      <Box sx={{ backgroundColor: 'primary.light',
        display:'flex',
        width:'100%',
        height:(theme) => theme.trello.appHeaderHeight,
        alignItems:'center'
      }}>
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          display:'flex',
          width:'100%',
          height:(theme) => theme.trello.boardBarHeight,
          alignItems:'center'


        }}> boardBarHeight</Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          display:'flex',
          width:'100%',
          height:(theme) => `calc(100vh - ${theme.trello.headerHeight} - ${theme.trello.boardBarHeight})`,
          alignItems:'center'
        }}
      ></Box>   
    </Container> 
  )
}

export default App
