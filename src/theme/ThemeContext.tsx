import { createContext } from 'react'

interface ThemeContextType {
  toggleColorMode: () => void
  mode: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
})
