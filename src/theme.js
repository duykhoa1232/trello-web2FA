import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  trello:{
    appHeaderHeight: '58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        // Customize if needed
        primary: {
          main: '#00897b',
          light: '#26a69a'
        },
        secondary: {
          main: '#dc004e'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#004d40',
          light: '#00796b'
        },
        secondary: {
          main: '#f50057'
        }
        // Customize if needed
      }
    }
  },
  cssVarPrefix: 'mui',
  colorSchemeSelector: 'body'
})

export default theme


// import { createTheme } from '@mui/material/styles'
// import { teal } from '@mui/material/colors'

// const theme = createTheme({
//   trello: {
//     appHeaderHeight: '48px',
//     boardBarHeight: '56px'
//   },
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           main: '#00897b',    // Đậm như màu nền trong ảnh
//           light: '#4db6ac'    // Nhạt hơn chút cho phần Header
//         },
//         background: {
//           default: '#00897b',  // Nền chính (Board Content)
//           paper: '#4db6ac'     // Header, hộp nhỏ
//         },
//         text: {
//           primary: '#ffffff'
//         }
//       }
//     },
//     dark: {
//       palette: {
//         primary: {
//           main: '#004d40',
//           light: '#00695c'
//         },
//         background: {
//           default: '#004d40',
//           paper: '#00695c'
//         },
//         text: {
//           primary: '#ffffff'
//         }
//       }
//     }
//   },
//   cssVarPrefix: 'mui',
//   colorSchemeSelector: 'body'
// })
