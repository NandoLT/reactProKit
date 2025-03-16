import { Button, Paper } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import useStore from '../../store/useStore'

export default function CounterDemo() {
  const { count, increase, decrease } = useStore()
  return (
    <>
      <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
        Zustand State Management Demo
      </Typography>
      <Box className="flex flex-col items-center mb-16">
        <Paper elevation={3} className="p-8 text-center max-w-md w-full">
          <Typography variant="h3" component="div" className="mb-4">
            {count}
          </Typography>
          <Box className="flex justify-center gap-4">
            <Button variant="contained" color="primary" onClick={increase}>
              Increment
            </Button>
            <Button variant="outlined" color="secondary" onClick={decrease}>
              Decrement
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  )
}
