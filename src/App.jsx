
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function App() {

  return (
    <>
      <Typography variant='text.secondary' component="h2">
      h1. Heading
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
      Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
      Link
      </Button>
      <HomeIcon />
      <HomeIcon color="primary" />
<HomeIcon color="secondary" />
<HomeIcon color="success" />
<HomeIcon color="action" />
<HomeIcon color="disabled" />
<HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
