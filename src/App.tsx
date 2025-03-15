'use client'

import type React from 'react'

import { useState } from 'react'
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
  useTheme,
} from '@mui/material'
import {
  Code as CodeIcon,
  Bolt as BoltIcon,
  Build as BuildIcon,
  Speed as SpeedIcon,
  GitHub as GitHubIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material'
import useStore from './store/useStore'

// Sample code snippets
const zustandExample = `// store.ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore`

const reactQueryExample = `// Example.tsx
import { useQuery } from '@tanstack/react-query'

function TodoList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://api.example.com/todos').then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}`

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function App() {
  const theme = useTheme()
  const [darkMode, setDarkMode] = useState(theme.palette.mode === 'dark')
  const [tabValue, setTabValue] = useState(0)
  const { count, increase, decrease } = useStore()

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, you would toggle the theme here
  }

  const technologies = [
    { name: 'Vite', description: 'Lightning fast build tool' },
    { name: 'React', description: 'UI component library' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'TailwindCSS', description: 'Utility-first CSS framework' },
    { name: 'MUI', description: 'Material Design components' },
    { name: 'ESLint', description: 'Code linting' },
    { name: 'Prettier', description: 'Code formatting' },
    { name: 'Husky', description: 'Git hooks' },
    { name: 'Zustand', description: 'State management' },
    { name: 'React Query', description: 'Data fetching' },
    { name: 'Jest', description: 'Testing framework' },
    { name: 'React Testing Library', description: 'Component testing' },
  ]

  return (
    <Box className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppBar position="static" color="primary">
        <Toolbar className="justify-between">
          <Typography variant="h6" component="div" className="flex items-center">
            <CodeIcon className="mr-2" />
            React Boilerplate
          </Typography>
          <div>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/yourusername/your-repo"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
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
                <code>{zustandExample}</code>
              </pre>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
                <code>{reactQueryExample}</code>
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
