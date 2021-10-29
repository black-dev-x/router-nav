import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/params/testing'>Param #01</Link>
        </li>
        <li>
          <Link to='/params/3'>Param #02</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu
