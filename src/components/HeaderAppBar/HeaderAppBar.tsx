import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material'
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material'
import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext'

export default function HeaderAppBar() {
  const { mode, toggleColorMode } = useContext(ThemeContext)
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="justify-between">
        <div className="flex items-center justify-between w-60">
          <Typography variant="h6" component="div">
            {'{ React - Vite }'}
          </Typography>
          <Typography variant="h6" component="div">
            Boilerplate
          </Typography>
        </div>
        <div>
          <Box className="flex items-center">
            <LightModeIcon fontSize="small" className="mr-1 text-amber-400" />
            <Switch
              checked={mode === 'dark'}
              onChange={toggleColorMode}
              color="default"
              className="mx-1"
            />
            <DarkModeIcon fontSize="small" className="ml-1 text-blue-300" />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  )
}
