import React from 'react'
import {
  DefaultTheme,
  ThemeProvider as ThemeProviderStyledComponents
} from 'styled-components'

interface ThemeProps {
  theme: DefaultTheme
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProps> = ({ theme, children }) => {
  return (
    <ThemeProviderStyledComponents theme={theme}>
      {children}
    </ThemeProviderStyledComponents>
  )
}

export default ThemeProvider
