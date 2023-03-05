import React from 'react'

import { Container } from './styles'

interface Props {
  children?: React.ReactNode
  fill?: boolean
  bgColor?: string
}

const Card: React.FC<Props> = ({ children, fill, ...props }) => {
  return <Container {...props}>{!fill && children}</Container>
}

export default Card
