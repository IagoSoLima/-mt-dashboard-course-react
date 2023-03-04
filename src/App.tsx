import React from 'react'

import Route from './routes'
import GlobalStyle from './styles/global'
import ThemeProvider from './styles/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  )
}

export default App
