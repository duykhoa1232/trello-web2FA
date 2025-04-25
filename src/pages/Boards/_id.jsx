import { Container } from '@mui/material'

import { BoardBar } from './BoardBar'
// import BoardBar from '~/pages/Boards/BoardBar'
import { AppBar } from '~/components/AppBar'
import BoardContent from './BoardContent'
export function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
export default Board
