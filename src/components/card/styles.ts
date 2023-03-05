import styled from 'styled-components'

interface Props {
  fill?: boolean
  bgColor?: string
}

export const Container = styled.div<Props>`
  max-width: 300px;
  min-width: 100px;
  height: 200px;

  border-radius: 5px;
  background-color: ${props => props.bgColor || 'var(--white)'};

  & * {
    color: var(--black);
  }
`
