import React, { FC } from 'react'
import ThemeProviderStyledComponents from './styled-components/theme-provider.styled-components'
import theme from './theme'

interface Props {
  children: React.ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProviderStyledComponents theme={theme}>
      {children}
    </ThemeProviderStyledComponents>
  )
}

export default ThemeProvider
