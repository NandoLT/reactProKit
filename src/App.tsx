'use client'

import type React from 'react'

import { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Paper,
  IconButton,
} from '@mui/material'
import {
  Bolt as BoltIcon,
  Build as BuildIcon,
  Speed as SpeedIcon,
  GitHub as GitHubIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material'
import useStore from './store/useStore'
import {
  REACT_QUERY_EXAMPLE,
  technologies,
  ZUSTAND_EXAMPLE,
} from './components/TabPanel/utils/tabPanelConstants'
import TabPanel from './components/TabPanel/TabPanel'
import { ThemeContext } from './theme/ThemeContext'

function App() {
  const { mode, toggleColorMode } = useContext(ThemeContext)
  const [tabValue, setTabValue] = useState(0)
  const { count, increase, decrease } = useStore()

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box className="min-h-screen" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
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
            <IconButton color="inherit" onClick={toggleColorMode}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/NandoLT/reactProKit_vite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Container className="py-16">
        <Box className="text-center mb-16">
          <Typography variant="h2" component="h1" className="font-bold mb-4">
            Modern React Development Starter
          </Typography>
          <Typography
            variant="h5"
            component="p"
            className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            A comprehensive boilerplate for building fast, scalable, and maintainable React
            applications with best practices and modern tools.
          </Typography>
          <Box className="flex justify-center gap-4">
            <Button
              variant="contained"
              size="large"
              startIcon={<BoltIcon />}
              className="bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              Get Started
            </Button>
            <Button variant="outlined" size="large" startIcon={<GitHubIcon />}>
              View on GitHub
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
          Packed with Modern Technologies
        </Typography>
        <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {technologies.map(tech => (
            <Card key={tech.name} className="hover:shadow-lg transition-shadow">
              <CardContent>
                <Typography variant="h6" component="h3" className="font-medium mb-1">
                  {tech.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Counter Demo */}
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

        {/* Code Examples */}
        <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
          Code Examples
        </Typography>
        <Box className="mb-16">
          <Paper elevation={3}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <Tab label="Zustand" icon={<SpeedIcon />} iconPosition="start" />
              <Tab label="React Query" icon={<BuildIcon />} iconPosition="start" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
                <code>{ZUSTAND_EXAMPLE}</code>
              </pre>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
                <code>{REACT_QUERY_EXAMPLE}</code>
              </pre>
            </TabPanel>
          </Paper>
        </Box>

        {/* Getting Started */}
        <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
          Getting Started
        </Typography>
        <Box className="mb-16 max-w-3xl mx-auto">
          <Paper elevation={3} className="p-6">
            <Typography variant="h6" component="h3" className="mb-4">
              Clone and Install
            </Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm mb-6">
              <code>
                git clone https://github.com/yourusername/your-repo.git my-project{'\n'}
                cd my-project{'\n'}
                npm install
              </code>
            </pre>

            <Typography variant="h6" component="h3" className="mb-4">
              Development
            </Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm mb-6">
              <code>npm run dev</code>
            </pre>

            <Typography variant="h6" component="h3" className="mb-4">
              Build
            </Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
              <code>npm run build</code>
            </pre>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" className="py-8 border-t border-gray-200 dark:border-gray-700">
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Created with ❤️ by Your Name
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" className="mt-2">
            © {new Date().getFullYear()} Your Project Name
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default App
