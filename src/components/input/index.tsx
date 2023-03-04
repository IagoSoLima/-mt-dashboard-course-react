import React from 'react'

import { Container } from './styles'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <Container>
      <input {...props} />
    </Container>
  )
}

export default Input
