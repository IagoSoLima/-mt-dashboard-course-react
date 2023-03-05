import { UserCircle } from 'phosphor-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
`
export const UserIcon = styled(UserCircle).attrs(() => ({
  size: 120,
  weight: 'fill',
  color: 'var(--blue-darker)'
}))`
  border-radius: 50%;
  background-color: var(--white);
`
