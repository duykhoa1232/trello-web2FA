import Board from './pages/Boards/_id'


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
    <>
      <Board />
    </>
  )
}

export default App
