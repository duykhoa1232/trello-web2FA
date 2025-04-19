import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        // Customize if needed
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f50057',
        },
        // Customize if needed
      },
    },
  },
  cssVarPrefix: 'mui',
  colorSchemeSelector: 'body',
});

export default theme;
