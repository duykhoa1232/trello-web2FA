import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        // Customize if needed
        primary: {
          main: '#1976d2',
        },
      },
    },
    dark: {
      palette: {
        // Customize if needed
      },
    },
  },
  cssVarPrefix: 'mui',
  colorSchemeSelector: 'body',
});

export default theme;
