import { useState } from 'react'
import { Box, Tab, Tabs, Paper, Typography } from '@mui/material'
import { ZUSTAND_EXAMPLE } from '../TabPanel/utils/tabPanelConstants'
import TabPanel from '../TabPanel/TabPanel'
import { Build as BuildIcon, Speed as SpeedIcon } from '@mui/icons-material'
import { REACT_QUERY_EXAMPLE } from '../TabPanel/utils/tabPanelConstants'

export default function CodeExample() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }
  return (
    <Box>
      <Typography variant="h4" component="h2" className="font-bold mb-8 text-center">
        Code Example
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
                <code>{ZUSTAND_EXAMPLE}</code>
              </pre>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
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
                <code>{REACT_QUERY_EXAMPLE}</code>
              </pre>
            </Box>
          </TabPanel>
        </Paper>
      </Box>
    </Box>
  )
}
