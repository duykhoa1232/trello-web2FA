import { Box } from '@mui/material'

export function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        display: 'flex',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        alignItems: 'center',
        px: 2,
        color: 'white'
      }}
    >
      Board Bar
    </Box>
  )
}
