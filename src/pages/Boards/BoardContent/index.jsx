import { Box } from '@mui/material'
export function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        display: 'flex',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trello.appHeaderHeight} - ${theme.trello.boardBarHeight})`,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary'
      }}
    >
      Board Content
    </Box>
  )
}
export default BoardContent
