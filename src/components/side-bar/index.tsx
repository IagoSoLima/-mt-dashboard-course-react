import React from 'react'
import { NavLink } from '~/routes/router-dom/components'
import Avatar from '~/components/avatar'

import * as S from './styles'

const SideBar: React.FC = () => {
  return (
    <S.Container>
      <Avatar />
      <div className='content'>
        <div className='info'>
          <p>Silva júnior</p>
          <p>silva.junior@empresa.com</p>
        </div>
        <S.NavMenu>
          <ul>
            <li>
              <NavLink to='/'>
                <S.HomeIcon />
                home
              </NavLink>
            </li>
            <li>
              <NavLink to='/registro'>
                <S.FolderIcon />
                ingressantes
              </NavLink>
            </li>
          </ul>
        </S.NavMenu>
      </div>
    </S.Container>
  )
}

export default SideBar
