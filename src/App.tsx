'use client'

import { Container, Box } from '@mui/material'
import HeaderAppBar from './components/HeaderAppBar/HeaderAppBar'
import BoilerplatePresentation from './components/BoilerplatePresentation/BoilerplatePresentation'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import FooterApp from './components/FooterApp/FooterApp'
import CounterDemo from './components/CounterDemo/CounterDemo'
import CodeExample from './components/CodeExample/CodeExample'
import GettingStarted from './components/GettingStarted/GettingStarted'

function App() {
  return (
    <Box className="min-h-screen" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <HeaderAppBar />
      <Container className="py-16">
        <BoilerplatePresentation />
        <FeaturesSection />
        <CounterDemo />
        <CodeExample />
        <GettingStarted />
      </Container>
      <FooterApp />
    </Box>
  )
}

export default App
