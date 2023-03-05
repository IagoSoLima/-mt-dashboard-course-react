import { User } from 'phosphor-react'
import React from 'react'
import SideBar from '~/components/side-bar'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <section className='content'>
        <div>
          <h1>CONTROLE GERAL</h1>
          {
            //icon hamburger
          }
        </div>
      </section>
    </Container>
  )
}

export default Home
