import styled from 'styled-components'
import { Folder, House } from 'phosphor-react'

export const Container = styled.aside`
  width: var(--nav-width);
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 10px;

  background-color: var(--blue-dark);
  color: var(--white);

  & .content {
    display: flex;
    flex-direction: column;
    width: 100%;

    & .info {
      margin-top: 30px;
      p {
        background-color: var(--blue-darker);
        margin-bottom: 10px;
        padding: 10px;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
  }
`
export const HomeIcon = styled(House).attrs(() => ({
  size: 24,
  color: 'var(--white)',
  weight: 'fill'
}))``

export const FolderIcon = styled(Folder).attrs(() => ({
  size: 24,
  color: 'var(--white)',
  weight: 'fill'
}))``

export const NavMenu = styled.nav`
  ul {
  }

  li {
    background-color: var(--blue-darker);
    margin-bottom: 10px;
    padding: 20px 10px;
    cursor: pointer;

    &:hover {
      background-color: var(--blue);
      transition: 0.5s;
    }

    a {
      display: grid;
      grid-template-columns: 50px 50px;
      margin-left: 50px;

      svg {
        margin-right: 10px;
      }
    }
  }
`
