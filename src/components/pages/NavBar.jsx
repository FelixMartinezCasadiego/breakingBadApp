import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/br.png'

export const NavBar = () => {
  return (
    <nav className='sticky-top'>
        <Link to={'/'}>
          <img src={Logo} alt="Breaking Bad Logo" className='imgNav mx-5 my-1 position-sticky' />
        </Link>

    </nav>
  )
}
