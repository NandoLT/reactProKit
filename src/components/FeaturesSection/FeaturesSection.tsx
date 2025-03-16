import { CardContent, Typography, Card, Box, Link } from '@mui/material'
import { TECHNOLOGIES } from '../TabPanel/utils/tabPanelConstants'

export default function FeaturesSection() {
  return (
    <>
      <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
        Packed with Modern Technologies
      </Typography>
      <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {TECHNOLOGIES.map(tech => (
          <Card
            key={tech.name}
            sx={{
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: 8,
              },
            }}
          >
            <CardContent>
              <Box className="flex items-center gap-2 mb-2">
                <tech.Icon size={24} />
                <Typography variant="h6" component="h3" className="font-medium">
                  <Link
                    href={tech.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {tech.name}
                  </Link>
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {tech.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  )
}
