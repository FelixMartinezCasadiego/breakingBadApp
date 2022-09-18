import React from 'react';
import Logo from '../../img/br.png'

export const NavBar = () => {
  return (
    <nav className='sticky-top'>
        <img src={Logo} alt="Breaking Bad Logo" className='imgNav mx-5 my-1 position-sticky' />
    </nav>
  )
}
