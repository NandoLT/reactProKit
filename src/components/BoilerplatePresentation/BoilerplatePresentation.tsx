import { Button } from '@mui/material'

import { Typography } from '@mui/material'

import { Box } from '@mui/material'
import { GitHub as GitHubIcon } from '@mui/icons-material'

export default function BoilerplatePresentation() {
  return (
    <Box className="text-center mb-16">
      <Typography variant="h2" component="h1" className="font-bold mb-4">
        Modern React Development Starter
      </Typography>
      <Typography
        variant="h5"
        component="p"
        className="text-gray-600 dark:text-gray-300"
        sx={{ maxWidth: '3xl', marginBottom: '16px' }}
      >
        A comprehensive boilerplate for building fast, scalable, and maintainable React applications
        with best practices and modern tools.
      </Typography>
      <Box className="flex justify-center gap-4">
        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          href="https://github.com/NandoLT/reactProKit_vite"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      </Box>
    </Box>
  )
}
