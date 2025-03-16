import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo, useState, ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

interface ThemeContextProviderProps {
  children: ReactNode
}

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode,
    }),
    [mode]
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
