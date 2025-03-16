import { Paper, Typography, Box } from '@mui/material'

export default function GettingStarted() {
  return (
    <>
      <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
        Getting Started
      </Typography>
      <Box className="mb-16 max-w-3xl mx-auto">
        <Paper elevation={3} className="p-6">
          <Typography variant="h6" component="h3" className="mb-4">
            Clone and Install
          </Typography>
          <Box
            sx={{
              '& pre': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.875rem',
                mb: 3,
              },
            }}
          >
            <pre>
              <code>
                git clone https://github.com/yourusername/your-repo.git my-project{'\n'}
                cd my-project{'\n'}
                npm install
              </code>
            </pre>
          </Box>

          <Typography variant="h6" component="h3" className="mb-4">
            Development
          </Typography>
          <Box
            sx={{
              '& pre': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.875rem',
                mb: 3,
              },
            }}
          >
            <pre>
              <code>npm run dev</code>
            </pre>
          </Box>

          <Typography variant="h6" component="h3" className="mb-4">
            Build
          </Typography>
          <Box
            sx={{
              '& pre': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                p: 2,
                borderRadius: 1,
                overflow: 'auto',
                fontSize: '0.875rem',
              },
            }}
          >
            <pre>
              <code>npm run build</code>
            </pre>
          </Box>
        </Paper>
      </Box>
    </>
  )
}
