import styled from 'styled-components'

interface Props {
  bgColor?: string
}

export const Container = styled.button<Props>`
  border: none;
  border-radius: 0.3rem;
  width: 7rem;
  height: 1.5rem;

  color: var(--white);
  cursor: pointer;
  font-size: 0.95rem;

  background-color: ${props => props.bgColor || 'var(--background-dark)'};

  &:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }

  &[type='submit'] {
    height: 2rem;
  }
`
