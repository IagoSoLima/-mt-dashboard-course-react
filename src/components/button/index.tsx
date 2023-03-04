import React from 'react'

import { Container } from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  bgColor?: string
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Button
