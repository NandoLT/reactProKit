import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'

export default function FooterApp() {
  return (
    <Box component="footer" className="py-8 border-t border-gray-200 dark:border-gray-700">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          Created with ❤️ by Fernando López Trejo
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" className="mt-2">
          © {new Date().getFullYear()} React Pro Kit {'{ VITE }'}
        </Typography>
      </Container>
    </Box>
  )
}
